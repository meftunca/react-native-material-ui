const path = require('path');
const webpack = require('webpack');

module.exports = async ({config, mode}) => {
  config.module.rules.push({
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: 'url-loader',
      options: {name: '[name].[ext]'},
    },
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.push({
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-vector-icons|react-native-safe-area-view|react-native-reanimated)/,
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
    include: require.resolve('@devloops/react-native-variant'),
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('ts-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          javascriptEnabled: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });
  config.module.rules.unshift({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
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
