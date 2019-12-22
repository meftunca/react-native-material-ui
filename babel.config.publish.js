module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    ['babel-plugin-typescript-to-proptypes', {comments: false}],
  ],
};
