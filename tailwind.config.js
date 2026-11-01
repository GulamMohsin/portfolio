/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy scale: slightly richer and bluer than plain black.
        ink: {
          950: '#060a15',
          900: '#0a1022',
          800: '#101a33',
          700: '#17254a',
          600: '#213460',
        },
        accent: {
          DEFAULT: '#3b82f6',
          glow: '#7cb0ff',
        },
        royal: '#8b5cf6',
        teal: {
          glow: '#22d3ee',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
