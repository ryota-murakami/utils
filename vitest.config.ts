import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vitest/config'
export default defineConfig({
  plugins: [EnvironmentPlugin([])],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./setupTests.ts'],
  },
})
