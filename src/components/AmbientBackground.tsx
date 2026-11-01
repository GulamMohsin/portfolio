import { motion } from 'framer-motion';

const orbs = [
  { className: 'left-[-8%] top-[8%] h-[420px] w-[420px] bg-accent/20', x: [0, 60, 0], y: [0, 40, 0], duration: 22 },
  { className: 'right-[-10%] top-[34%] h-[460px] w-[460px] bg-royal/20', x: [0, -50, 0], y: [0, 60, 0], duration: 26 },
  { className: 'bottom-[-12%] left-[28%] h-[380px] w-[380px] bg-teal-glow/10', x: [0, 40, 0], y: [0, -50, 0], duration: 30 },
];

/** Slowly drifting colour orbs fixed behind the page. Decorative only. */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.className}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={{ x: orb.x, y: orb.y }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
