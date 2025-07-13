/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

// Replace with your own imports
import cardGLB from "../assets/glb/card.glb";
import lanyard from "../assets/img/lanyard.png";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20, transparent = true }) {
  return (
    <>
    <div
      className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center"
      style={{ touchAction: 'none' }}
    >
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
    </>
  );
}

function Particles({ cardRef }) {
  const particlesRef = useRef();
  const particleCount = 20;
  const minDistanceFromCard = 3; // Minimum distance from card center

  const particlesData = useMemo(() => {
    const data = [];
    const cardCenter = new THREE.Vector3(2, 0, 0); // Card's approximate center
    for (let i = 0; i < particleCount; i++) {
      let position, theta, radiusX, radiusY, radiusZ;
      do {
        // Ellipsoidal distribution: wide in X/Z, narrow in Y
        radiusX = 6 + Math.random() * 2; // 6 to 8 units for X
        radiusY = 3 + Math.random() * 1; // 2 to 4 units for Y
        radiusZ = 6 + Math.random() * 2; // 6 to 8 units for Z
        theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        position = new THREE.Vector3(
          radiusX * Math.sin(phi) * Math.cos(theta),
          radiusY * Math.cos(phi),
          radiusZ * Math.sin(phi) * Math.sin(theta)
        );
      } while (position.distanceTo(cardCenter) < minDistanceFromCard); // Ensure not too close to card

      const size = i < 5 ? 0.06 + Math.random() * 0.1 : 0.2 + Math.random() * 0.1; // Slightly smaller sizes
      data.push({ position, angle: theta, radiusX, radiusY, radiusZ, size });
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

  useFrame((state, delta) => {
    const group = particlesRef.current;
    const speed = cardRef.current
      ? Math.sqrt(
          cardRef.current.linvel().x ** 2 +
          cardRef.current.linvel().y ** 2 +
          cardRef.current.linvel().z ** 2
        )
      : 0;

    particlesData.forEach((particle, index) => {
      const mesh = group.children[index];
      // Slower and smoother response to drag
      const dragInfluence = speed > 0.1 ? Math.min(speed * 0.0005, 0.005) : 0.002; // Reduced multiplier
      particle.angle += dragInfluence;

      // Update position using ellipsoidal coordinates
      const phi = Math.acos(particle.position.y / particle.radiusY);
      particle.position.x = particle.radiusX * Math.sin(phi) * Math.cos(particle.angle);
      particle.position.y = particle.radiusY * Math.cos(phi);
      particle.position.z = particle.radiusZ * Math.sin(phi) * Math.sin(particle.angle);

      // Smoothly lerp to new position
      mesh.position.lerp(
        new THREE.Vector3(
          particle.position.x,
          particle.position.y - 0.6, // Keep y-offset
          particle.position.z
        ),
        0.1 // Smoother transition
      );

      // Gentle floating animation
      mesh.position.y += Math.sin(Date.now() * 0.0005 + index) * 0.001; // Slower float
      mesh.rotation.x += 0.005; // Slower rotation
      mesh.rotation.y += 0.005;
    });
  });

  return (
    <group ref={particlesRef} position={[0, 4, 0]}>
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
}

function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef();
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 1024
  );

  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyard);
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
  ]));

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.50, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.05, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerDown={(e) => {
              e.target.setPointerCapture(e.pointerId);
              const offset = new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()));
              drag(offset);
            }}
            onPointerUp={(e) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerMove={() => {}}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                side={THREE.DoubleSide}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <Particles cardRef={card} />
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}