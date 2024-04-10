import path from 'node:path'

import { defineConfig } from 'vitest/config'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './package'),
    },
  },
  test: {
    environment: 'node',
    globals: true,
    setupFiles: ['./setupTests.ts'],
    include: ['packages/**/*.{test,spec}.{ts,js}'],
    exclude: ['packages/types', 'node_modules', 'dist'],
  },
})
