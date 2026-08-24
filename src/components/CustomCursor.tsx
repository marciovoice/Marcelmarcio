import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'view' | 'explore' | 'drag' | 'open' | 'play' | 'scroll'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Velocity tracking
  const lastPos = useRef({ x: 0, y: 0, time: Date.now() });
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    // Disable completely on touch devices
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      if (isTouch) {
        setIsTouchDevice(true);
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = Math.max(now - lastPos.current.time, 1);
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;
      setVelocity(Math.min(speed * 15, 30));
      lastPos.current = { x: e.clientX, y: e.clientY, time: now };

      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, select, [data-interactive="true"]');
      const customTextElement = target.closest('[data-cursor-text]');
      const customText = customTextElement?.getAttribute('data-cursor-text');

      if (customText) {
        setCursorText(customText);
        const lower = customText.toLowerCase();
        if (['view', 'explore', 'drag', 'open', 'play', 'scroll'].includes(lower)) {
          setCursorVariant(lower as any);
        } else {
          setCursorVariant('default');
        }
        setIsHovered(true);
      } else {
        setCursorText(null);
        setCursorVariant('default');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B79B58]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorText ? 0 : 1,
          scale: isClicking ? 0.6 : isHovered ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 600, mass: 0.12 }}
      />

      {/* Floating Dynamic Outer Ring & Label Capsule */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center border transition-colors duration-200 ${
          cursorText
            ? 'bg-[#B79B58] text-[#0B0B0B] border-[#B79B58] shadow-2xl shadow-[#B79B58]/40 font-tech-mono font-bold uppercase text-[10px] tracking-widest px-3.5 py-1'
            : isHovered
            ? 'border-[#B79B58] bg-[#B79B58]/15 backdrop-blur-[2px]'
            : 'border-[#B79B58]/30 bg-transparent'
        }`}
        animate={{
          x: cursorText
            ? mousePosition.x - 42
            : isHovered
            ? mousePosition.x - 26
            : mousePosition.x - 16,
          y: cursorText
            ? mousePosition.y - 18
            : isHovered
            ? mousePosition.y - 26
            : mousePosition.y - 16,
          width: cursorText ? 'auto' : isHovered ? 52 : 32,
          height: cursorText ? 'auto' : isHovered ? 52 : 32,
          scale: isClicking ? 0.85 : 1,
          rotate: cursorVariant === 'drag' ? 45 : 0,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 340, mass: 0.28 }}
      >
        {cursorText && <span className="whitespace-nowrap">{cursorText}</span>}
      </motion.div>
    </div>
  );
};
