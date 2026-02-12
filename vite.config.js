import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import webpackStatsPlugin from 'rollup-plugin-webpack-stats';
import { bundleStats } from 'rollup-plugin-bundle-stats';
import relativeCiAgent from '@relative-ci/rollup-plugin';

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
    // webpackStatsPlugin(),
    relativeCiAgent(),
  ],
}));
