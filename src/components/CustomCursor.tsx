import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, [data-interactive="true"]');
      const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      setIsHovered(!!interactive || !!customText);
      setCursorText(customText || null);
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

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#B79B58]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovered && cursorText ? 0 : 1,
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.2 }}
      />

      {/* Floating Aura Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center border ${
          cursorText
            ? 'bg-[#B79B58] text-[#0B0B0B] border-[#B79B58] shadow-lg shadow-[#B79B58]/30 font-sans-refined font-semibold uppercase text-[10px] tracking-widest px-3 py-1'
            : isHovered
            ? 'border-[#B79B58] bg-[#B79B58]/10 backdrop-blur-[1px]'
            : 'border-[#B79B58]/30 bg-transparent'
        }`}
        animate={{
          x: cursorText ? mousePosition.x - 42 : isHovered ? mousePosition.x - 24 : mousePosition.x - 16,
          y: cursorText ? mousePosition.y - 18 : isHovered ? mousePosition.y - 24 : mousePosition.y - 16,
          width: cursorText ? 'auto' : isHovered ? 48 : 32,
          height: cursorText ? 'auto' : isHovered ? 48 : 32,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      >
        {cursorText && <span>{cursorText}</span>}
      </motion.div>
    </div>
  );
};
