/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        bg: 'var(--bg)',
        panel: {
          DEFAULT: 'var(--panel)',
          2: 'var(--panel-2)',
        },
        border: 'var(--border)',

        // Text
        text: {
          DEFAULT: 'var(--text)',
          2: 'var(--text-2)',
        },
        muted: 'var(--muted)',

        // Brand - using rgb for opacity support
        primary: {
          DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
          2: 'var(--primary-2)',
        },
        secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
        accent: 'var(--accent)',

        // Semantics
        success: 'rgb(var(--success-rgb) / <alpha-value>)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
      },
      ringColor: {
        DEFAULT: 'var(--ring)',
      },
    },
  },
  plugins: [],
};
