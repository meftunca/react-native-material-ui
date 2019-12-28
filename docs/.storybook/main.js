const path = require('path');

module.exports = {
  presets: [
    {
      name: '@storybook/addon-docs/react/preset',
      options: {
        configureJSX: true,
        // babelOptions: {},
        // sourceLoaderOptions: null,
      },
    },
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '/tsconfig.json'),
          transpileOnly: true,
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '.tsconfig.json'),
        },
        include: [
          path.resolve(__dirname, '../stories'),
          path.resolve(__dirname, '../src'),
        ],
      },
    },
    // {
    //   name: '@storybook/preset-typescript',
    //   options: {
    //     tsDocgenLoaderOptions: {
    //       tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
    //     },
    //     transpileManager: true,
    //   },
    // },
  ],
  stories: ['../stories/**/*.stories.(ts|tsx|jsx|js|mdx)'],
};
