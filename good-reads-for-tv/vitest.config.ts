/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './node_modules/vitest-react/setup.ts',
    silent: true,
    reporters: 'verbose',
  },
})
