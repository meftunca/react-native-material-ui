module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '8',
          esmodules: false,
        },
        modules: 'commonjs',
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-optional-chaining',
    ['babel-plugin-typescript-to-proptypes', {comments: true}],
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
