import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import type { PointerEvent, ReactNode } from 'react';

interface TiltProps {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. Keep it small: subtle looks more professional. */
  max?: number;
}

/**
 * Gives a card a gentle 3D tilt that follows the mouse.
 * Touch input and visitors who prefer reduced motion get a plain, still card.
 */
export function Tilt({ children, className = '', max = 5 }: TiltProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 220, damping: 22 });

  if (reduce) return <div className={className}>{children}</div>;

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className={className} style={{ perspective: 900 }}>
      <motion.div
        className="h-full"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onPointerMove={onMove}
        onPointerLeave={reset}
      >
        {children}
      </motion.div>
    </div>
  );
}
