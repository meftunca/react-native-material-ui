const path = require('path');
const webpack = require('webpack');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const disableEsLint = e => {
  return (
    e.module.rules
      .filter(
        e =>
          e.use &&
          e.use.some(e => e.options && void 0 !== e.options.useEslintrc),
      )
      .forEach(s => {
        e.module.rules = e.module.rules.filter(e => e !== s);
      }),
    e
  );
};
module.exports = async ({config, mode}) => {
  config = disableEsLint(config);
  config.module.rules.push({
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: 'url-loader',
      options: {name: '[name].[ext]'},
    },
  });
  config.module.rules.push({
    test: /\.(woff|ttf|woff2|eot)$/,
    loader: 'file-loader',
  });
  // config.module.rules.push({
  //   test: /\.ttf$/,
  //   loader: 'url-loader', // or directly file-loader
  //   include: path.resolve(
  //     __dirname,
  //     '../node_modules/react-native-vector-icons',
  //   ),
  // });
  config.module.rules.push({
    test: /\.s?css$/,
    use: ['style-loader', 'raw-loader', 'sass-loader'],
    exclude: [/node_modules/],
    // include: [/@storybook\/addon-info/],
  });
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules[/\\](?!react-native-variant|react-native-vector-icons|react-native-safe-area-view|react-native-reanimated)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configuration for compilation
        // presets: ['module:metro-react-native-babel-preset'],
        // plugins: [
        //   '@babel/plugin-proposal-optional-chaining',
        //   'react-native-web',
        // ],
        presets: [
          ['@babel/preset-env', {useBuiltIns: 'usage'}],
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-proposal-optional-chaining',
        ],
      },
    },
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../stories'),
    exclude: /node_modules[/\\](?!react-native-variant|react-native-vector-icons|react-native-safe-area-view|react-native-reanimated)/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          presets: ['module:metro-react-native-babel-preset'],
          plugins: [
            '@babel/plugin-proposal-optional-chaining',
            'react-native-web',
          ],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });
  // config.module.rules.push({
  //   test: /\.scss$/,
  //   use: [
  //     {
  //       loader: 'style-loader',
  //     },
  //     {
  //       loader: 'css-loader',
  //     },
  //     {
  //       loader: 'sass-loader',
  //       options: {
  //         javascriptEnabled: true,
  //       },
  //     },
  //   ],
  // });
  config.module.rules.unshift({
    test: /\.stories\.[tj](s|sx)?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });
  config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
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
    ...config.resolve.alias,
    // '@devloops/react-native-variant': path.resolve(__dirname + '/../src'),
    'react-native$': 'react-native-web',
  };

  return config;
};
