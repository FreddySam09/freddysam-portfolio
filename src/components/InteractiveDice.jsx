import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import dice1 from "../assets/dice/dice1.png";
import dice2 from "../assets/dice/dice2.png";
import dice3 from "../assets/dice/dice3.png";
import dice4 from "../assets/dice/dice4.png";
import dice5 from "../assets/dice/dice5.png";
import dice6 from "../assets/dice/dice6.png";
import mascotGif from "../assets/gifs/mascot-gif.gif";
import * as THREE from "three";

const Particles = ({ diceAngularVelocity }) => {
  const particlesRef = useRef();
  const particleCount = 17;

  const particlesData = useMemo(() => {
    const data = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = 0.9 + Math.random() * 0.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const position = [
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      ];
      const size = i < 4 ? 0.08 + Math.random() * 0.02 : 0.05 + Math.random() * 0.02;
      data.push({ position, angle: theta, radius, size });
    }
    return data;
  }, []);

  const createSphereGeometry = (size) => {
    const geometry = new THREE.SphereGeometry(size, 16, 16);
    const colors = [];
    const vertices = geometry.attributes.position.array;

    for (let i = 0; i < vertices.length; i += 3) {
      const y = vertices[i + 1];
      const t = (y + size) / (2 * size);
      const colorTop = new THREE.Color("#bf510d");
      const colorBottom = new THREE.Color("#F26711");
      const color = colorTop.lerp(colorBottom, t);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geometry;
  };

  const geometries = useMemo(() => {
    return particlesData.map((particle) => createSphereGeometry(particle.size));
  }, [particlesData]);

  useFrame(() => {
    const group = particlesRef.current;
    const spinSpeed = Math.sqrt(
      diceAngularVelocity[0] ** 2 +
        diceAngularVelocity[1] ** 2 +
        diceAngularVelocity[2] ** 2
    );

    particlesData.forEach((particle, index) => {
      const mesh = group.children[index];

      if (spinSpeed > 0.01) {
        particle.angle += diceAngularVelocity[1] * 0.05;
      } else {
        particle.angle += 0.005;
      }

      const { radius, angle } = particle;
      const phi = Math.acos(particle.position[1] / radius);
      particle.position[0] = radius * Math.sin(phi) * Math.cos(angle);
      particle.position[1] = radius * Math.cos(phi);
      particle.position[2] = radius * Math.sin(phi) * Math.sin(angle);
      mesh.position.set(...particle.position);
      mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
  });

  return (
    <group ref={particlesRef}>
      {particlesData.map((particle, index) => (
        <mesh key={index} position={particle.position} geometry={geometries[index]}>
          <meshStandardMaterial
            vertexColors={true}
            roughness={0.3}
            metalness={0.2}
            emissive="#ff7b00"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

const Dice = ({ onRollComplete }) => {
  const diceRef = useRef();
  const [isSpinning, setIsSpinning] = useState(false);
  const [angularVelocity, setAngularVelocity] = useState([0, 0, 0]);
  const [targetRotation, setTargetRotation] = useState(null);
  const [faceNumber, setFaceNumber] = useState(null);
  const lastSpinTime = useRef(0);
  const damping = 0.95;
  const stopThreshold = 0.01;
  const lerpSpeed = 0.05;

  const textures = [
    useLoader(THREE.TextureLoader, dice3),
    useLoader(THREE.TextureLoader, dice4),
    useLoader(THREE.TextureLoader, dice1),
    useLoader(THREE.TextureLoader, dice6),
    useLoader(THREE.TextureLoader, dice5),
    useLoader(THREE.TextureLoader, dice2),
  ];

  const materials = textures.map(
    (texture) =>
      new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.4,
        metalness: 0.2,
        color: new THREE.Color(1, 1, 1),
      })
  );

  const handlePointerDown = (e) => {
    e.stopPropagation();
    const now = Date.now();
    if (now - lastSpinTime.current < 1000) return;
    lastSpinTime.current = now;

    setIsSpinning(true);
    setTargetRotation(null);
    setFaceNumber(null);
    setAngularVelocity([
      (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 0.5,
    ]);
  };

  useFrame(({ camera }) => {
    if (isSpinning) {
      diceRef.current.rotation.x += angularVelocity[0];
      diceRef.current.rotation.y += angularVelocity[1];
      diceRef.current.rotation.z += angularVelocity[2];

      const newVelocity = angularVelocity.map((v) => v * damping);
      setAngularVelocity(newVelocity);

      const speed = Math.sqrt(
        newVelocity[0] ** 2 + newVelocity[1] ** 2 + newVelocity[2] ** 2
      );
      if (speed < stopThreshold) {
        setIsSpinning(false);

        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);

        const euler = new THREE.Euler(
          diceRef.current.rotation.x,
          diceRef.current.rotation.y,
          diceRef.current.rotation.z
        );
        const matrix = new THREE.Matrix4().makeRotationFromEuler(euler);

        const faceNormals = [
          new THREE.Vector3(0, 1, 0),
          new THREE.Vector3(0, -1, 0),
          new THREE.Vector3(0, 0, -1),
          new THREE.Vector3(-1, 0, 0),
          new THREE.Vector3(1, 0, 0),
          new THREE.Vector3(0, 0, 1),
        ];

        const worldNormals = faceNormals.map((normal) =>
          normal.clone().applyMatrix4(matrix)
        );

        let maxDot = -1;
        let faceClosest = 0;
        worldNormals.forEach((normal, index) => {
          const dot = normal.dot(cameraDirection.clone().negate());
          if (dot > maxDot) {
            maxDot = dot;
            faceClosest = index;
          }
        });

        const targetRotations = [
          [0, 0, 0],
          [Math.PI, 0, 0],
          [Math.PI / 2, 0, 0],
          [0, 0, -Math.PI / 2],
          [0, 0, Math.PI / 2],
          [-Math.PI / 2, 0, 0],
        ];
        const [x, y, z] = targetRotations[faceClosest];
        setTargetRotation({ x, y, z });

        const number = [1, 6, 2, 4, 3, 5][faceClosest];
        setFaceNumber(number);
      }
    } else if (targetRotation) {
      const { x: targetX, y: targetY, z: targetZ } = targetRotation;
      diceRef.current.rotation.x = THREE.MathUtils.lerp(
        diceRef.current.rotation.x,
        targetX,
        lerpSpeed
      );
      diceRef.current.rotation.y = THREE.MathUtils.lerp(
        diceRef.current.rotation.y,
        targetY,
        lerpSpeed
      );
      diceRef.current.rotation.z = THREE.MathUtils.lerp(
        diceRef.current.rotation.z,
        targetZ,
        lerpSpeed
      );

      const rotationDifference = Math.max(
        Math.abs(diceRef.current.rotation.x - targetX),
        Math.abs(diceRef.current.rotation.y - targetY),
        Math.abs(diceRef.current.rotation.z - targetZ)
      );
      if (rotationDifference < 0.01) {
        diceRef.current.rotation.set(targetX, targetY, targetZ);
        setTargetRotation(null);
        if (faceNumber) onRollComplete(faceNumber);
      }
    }
  });

  return (
    <>
      <mesh ref={diceRef} position={[0, 0, 0]} onPointerDown={handlePointerDown}>
        <boxGeometry args={[1, 1, 1, 32, 32, 32]} />
        {materials.map((material, index) => (
          <meshStandardMaterial key={index} attach={`material-${index}`} {...material} />
        ))}
      </mesh>
      <Particles diceAngularVelocity={angularVelocity} />
    </>
  );
};

const InteractiveDice = () => {
  const [memory, setMemory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [faceNumber, setFaceNumber] = useState(null);

  const diceMemories = {
    1: { title: "My First!", description: "This dice is the first three js component i made!" },
    2: { title: "Two-in-a-Row!", description: "I made it to the Smart India Hackathon Finals twice!" },
    3: { title: "The Trio!!", description: "I LOVE Messi, Xavi & Iniesta as a trio" },
    4: { title: "Family of Four", description: "My family is of 4, my parents and a brother" },
    5: { title: "5 minute try", description: "I spend 5 minutes each day to design something random" },
    6: { title: "Six days of bliss", description: "6-day Hyderabad trip with friends, was unforgettable" },
  };

  const handleRollComplete = (number) => {
    setMemory(diceMemories[number]);
    setFaceNumber(number);
    setIsVisible(true);
    setHasSpun(true);
  };

  const textMap = {
    1: "ONE",
    2: "TWO",
    3: "THREE",
    4: "FOUR",
    5: "FIVE",
    6: "SIX",
  };
  const backgroundText = hasSpun && faceNumber ? textMap[faceNumber] : "SPIN";

  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-visible">
      {/* BIG BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center z-0 font-stadium text-[300px] sm:text-[440px] text-gray-900 drop-shadow-xl opacity-100 tracking-wide select-none pointer-events-none mt-16">
        {backgroundText}
      </div>

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 1, 3], fov: 50 }}
        style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
      >
        <ambientLight intensity={4} />
        <pointLight position={[2, 2, 2]} intensity={1} distance={10} />
        <pointLight position={[-2, -2, -2]} intensity={0.5} distance={10} />
        <Dice onRollComplete={handleRollComplete} />
        <Stars radius={50} depth={50} count={500} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>

      {/* Bubble and mascot wrapper */}
    {(!hasSpun || memory) && (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 sm:mt-7 z-20">
        <div className="relative bg-gray-100 outline-1 outline-dark p-2 w-42 sm:w-48 rounded-lg shadow-lg text-xs sm:text-sm font-figtree text-dark transition-opacity duration-500">
        
        {/* 🧸 Mascot sitting top-left corner of bubble */}
        <img
            src={mascotGif}
            alt="mascot"
            className="absolute -top-6 -right-3 h-12 w-12 object-contain z-30"
        />

        {/* Dynamic content */}
        {!hasSpun ? (
            <p>Get to know me, spin the dice!</p>
        ) : (
            <>
            <h3 className="font-semibold">{memory.title}</h3>
            <p>{memory.description}</p>
            </>
        )}

        {/* Bottom pointer triangle */}
        <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-100" />
        </div>
    </div>
    )}
    </div>
  );
};

export default InteractiveDice;
