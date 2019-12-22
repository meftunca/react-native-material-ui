const path = require('path');

module.exports = {
  presets: [
    {
      name: '@storybook/addon-docs/react/preset',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    {
      name: '@storybook/preset-typescript',
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
        },
      },
    },
  ],
  stories: ['../src/**/*.stories.(js|ts|md)x'],
};
