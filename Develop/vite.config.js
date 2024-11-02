// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',           // Output directory
    emptyOutDir: true,        // Clear previous builds
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Recognizes both .js and .jsx
  },
});
