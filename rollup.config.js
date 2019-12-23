import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  plugins: [
    typescript(),
    sourceMaps()

    // The plugins below were included in bili's rollup config
    //    { name: 'progress' },
    //    { name: 'json' },
    //    { name: 'hashbang' },
    //    { name: 'bili-custom-resolve' },
    //    { name: 'postcss' },
    //    { name: 'rpt2' },
    //    { name: 'babel' },
    //    { name: 'buble' }
    //    { name: 'record-bundle' }
  ],
  output: {
    format: 'esm',
    dir: './dist-rollup',
    entryFileNames: '[name].module.js',
    name: 'repro-tslib-sourcemap',
    sourcemap: true,
    sourcemapExcludeSources: false
  }
};
