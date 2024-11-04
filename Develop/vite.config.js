
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'public',
  build: {
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Clear previous builds
    rollupOptions: {
      external: ['./App.jsx'] // Specify App.jsx as external to prevent resolution issues
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Recognizes both .js and .jsx
  }
});
