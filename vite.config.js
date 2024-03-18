import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { webpackStats } from 'rollup-plugin-webpack-stats';
import { bundleStats } from 'rollup-plugin-bundle-stats';

export default defineConfig(() => ({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
  plugins: [
    react(),
    bundleStats(),
    // Output webpack-stats.json file
    webpackStats(),
  ],
}));
