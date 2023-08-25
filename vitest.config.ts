import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['tsc-dist'],
    globals: true,
    include: [
      'src/**/*.test.ts',
      'src/**/*.test.tsx',
      'src/**/*.test.js',
      'src/**/*.test.jsx',
    ],
    setupFiles: ['./setupTests.ts'],
  },
})
