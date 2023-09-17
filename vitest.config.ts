import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['tsc-dist', 'packages/types'],
    globals: true,
    include: [
      'packages/**/*.test.ts',
      'packages/**/*.test.tsx',
      'packages/**/*.test.js',
      'packages/**/*.test.jsx',
    ],
    setupFiles: ['./setupTests.ts'],
  },
})
