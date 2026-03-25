import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/vibe03-ChickenPlinkoV2/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}));
