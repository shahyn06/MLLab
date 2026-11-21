import {defineConfig} from 'vite';
export default defineConfig(({mode})=>({base:'./',build:{outDir:mode==='portable'?'dist-portable':'dist',rollupOptions:{output:{inlineDynamicImports:mode==='portable'}}}}));
