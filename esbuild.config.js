// esbuild.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.ts'],  // Your entry point
  outdir: 'dist',
  bundle: true,                    // Keep modules separate
  platform: 'node',
  target: 'es2022',
  format: 'esm',
  sourcemap: true,
  splitting: false,
  outExtension: { '.js': '.js' },
  logLevel: 'info',
}).catch(() => process.exit(1));
