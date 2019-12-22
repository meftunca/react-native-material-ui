const path = require('path');
module.exports = [
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
      include: [require.resolve('@devloops/react-native-variant')],
    },
  },
];
