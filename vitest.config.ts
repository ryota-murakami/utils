import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vitest/config'
export default defineConfig({
  plugins: [EnvironmentPlugin([])],
  test: {
    environment: 'jsdom',
    exclude: ['tsc-dist'],
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
