module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    // ['react-native-web', {commonjs: true}],
    // [
    //   [
    //     'module-resolver',
    //     {
    //       alias: {
    //         '^react-native$': 'react-native-web',
    //       },
    //     },
    //   ],
    // ],
  ],
};
