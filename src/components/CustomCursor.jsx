import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 }); // Initialize off-screen
  const [cursorType, setCursorType] = useState('default'); // "default" | "view"

  useEffect(() => {
    // Preload cursor image
    const img = new Image();
    img.src = '/cursors/view-cursor.png';
    img.onerror = () => console.error('Failed to load cursor image: /cursors/view-cursor.png');
    img.onload = () => console.log('Cursor image loaded: /cursors/view-cursor.png');

    const handleMove = (e) => {
      console.log('Mouse move:', e.clientX, e.clientY); // Debug log
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  // Scan for hover state
  useEffect(() => {
    const targets = document.querySelectorAll('.view-c:not(.custom-cursor-active)');
    console.log('Found view-c elements:', targets.length); // Debug log

    const handleEnter = (e) => {
      console.log('Entered view-c element:', e.target); // Debug log
      setCursorType('view');
    };
    const handleLeave = (e) => {
      console.log('Left view-c element:', e.target); // Debug log
      setCursorType('default');
    };

    targets.forEach((el) => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  const variants = {
    default: { opacity: 1, scale: 1, width: 12, height: 12 },
    view: { opacity: 1, scale: 1, width: 96, height: 96 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      className={`fixed z-[9999] pointer-events-none rounded-full flex items-center justify-center
        ${cursorType === 'view' ? 'bg-black border-light border-2' : 'bg-none'}`}
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
      }}
      variants={variants}
      animate={cursorType}
      transition={{ duration: 0.1, ease: 'easeInOut' }}
    >
      <AnimatePresence>
        {cursorType === 'view' && (
          <motion.div
            key="view-cursor"
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(/cursors/view-cursor.png)` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;