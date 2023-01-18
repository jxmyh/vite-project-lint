import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  plugins: [
    react(),
    viteEslint({
      exclude: ['**/*.spec.ts']
    }),
    svgr(),
    viteStylelint({
      exclude: /windicss|node_modules/
    })
  ]
});
