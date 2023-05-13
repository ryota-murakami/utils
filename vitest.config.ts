import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vitest/config'
export default defineConfig({
  plugins: [EnvironmentPlugin([])],
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
