import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({  
     babel: {
    // configFile: "./babel.config.js"
  }}
 
  )],
  build: {
    rollupOptions: {
      // Add 'jsx' option to specify Babel as the JSX transform
      output: {
        manualChunks: undefined,
      },
    },
  },
});
