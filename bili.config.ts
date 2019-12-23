import { Config } from 'bili';

const config: Config = {
  input: 'src/index.ts',
  output: {
    format: ['esm'],
    dir: './dist-bili',
    moduleName: 'repro-tslib-sourcemap',
    fileName: '[name].module.js',
    sourceMap: true
  },
  bundleNodeModules: true,
  extendRollupConfig(config) {
    // log the rollup config used by this bili config
    console.log(JSON.stringify(config));
    return config;
  }
};

export default config;
