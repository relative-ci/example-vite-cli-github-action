import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { webpackStats } from 'rollup-plugin-webpack-stats';
import { bundleStats } from 'rollup-plugin-bundle-stats';

export default defineConfig((env) => ({
  plugins: [
    react(),
    bundleStats(),
    // Output webpack-stats.json file
    webpackStats(),
  ],
}));
