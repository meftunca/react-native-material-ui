const path = require('path');
const webpack = require('webpack');

module.exports = async ({config, mode}) => {
  config.module.rules.push({
    test: /\.(gif|jpe?g|png|svg|.ttf)$/,
    use: {
      loader: 'url-loader',
      options: {name: '[name].[ext]'},
    },
    include: path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
  });
  config.module.rules.push({
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
  });
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view|react-native-reanimated)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configuration for compilation
        presets: [
          ['@babel/preset-env', {useBuiltIns: 'usage'}],
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
        ],
      },
    },
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
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

  config.resolve.alias = {
    'react-native$': 'react-native-web',
  };

  return config;
};
