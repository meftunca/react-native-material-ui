const path = require('path');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  config.entry = path.join(__dirname, 'index.js');
  config.output = {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  };
  config.module.rules.push({
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
  });
  config.module.rules.push({
    test: /\.(js|ts|tsx|jsx)$/,
    // include: [path.resolve('src'), path.resolve('pages')],
    exclude: /node_modules[/\\](?!react-native-reanimated|react-native-gesture-handler|react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configuration for compilation
        presets: [
          'module:metro-react-native-babel-preset',
          // '@babel/preset-env',
          // '@babel/preset-react',
          // '@babel/preset-flow',
          // '@babel/preset-typescript',
        ],
        plugins: [
          'react-native-web',
          // '@babel/plugin-proposal-optional-chaining',
          // '@babel/plugin-transform-runtime',
          // '@babel/plugin-proposal-class-properties',
          // '@babel/plugin-proposal-object-rest-spread',
          // '@babel/plugin-proposal-export-default-from',
        ],
      },
    },
  });
  config.resolve.alias = {
    'react-native$': require.resolve('react-native-web'),
    'react-dom': '@hot-loader/react-dom',
  };
  config.resolve.extensions = [
    '.web.js',
    '.js',
    '.web.ts',
    '.ts',
    '.json',
    '.web.jsx',
    '.jsx',
    '.web.tsx',
    '.tsx',
  ];
  config.devtool = 'source-map';
  // let eslintRules = config.module.rules.filter(
  //   r =>
  //     r.use &&
  //     r.use.some &&
  //     r.use.some(u => u.options && u.options.useEslintrc !== void 0),
  // );
  // eslintRules.forEach(rule => {
  //   config.module.rules = config.module.rules.filter(r => r !== rule);
  // });

  config = rewireReactHotLoader(config, env);
  return config;
};
