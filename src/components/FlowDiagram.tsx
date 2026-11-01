import { motion } from 'framer-motion';
import type { FlowStep } from '../types';

interface FlowDiagramProps {
  steps: FlowStep[];
  /** Accessible name for the diagram. */
  label: string;
}

/**
 * Vertical flow diagram: numbered nodes joined by a connector line.
 * Each step animates in once as it scrolls into view.
 */
export function FlowDiagram({ steps, label }: FlowDiagramProps) {
  return (
    <ol aria-label={label} className="relative space-y-4">
      {/* Connector line behind the numbered nodes */}
      <span
        aria-hidden="true"
        className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-accent/60 via-royal/40 to-accent/10"
      />
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          className="relative flex gap-4"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: 'easeOut' }}
        >
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-ink-900 font-mono text-sm text-accent-glow">
            {index + 1}
          </span>
          <div className="card flex-1 px-5 py-4">
            <h3 className="font-medium text-white">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
