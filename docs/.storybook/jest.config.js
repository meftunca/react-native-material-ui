module.exports = {
  transform: {
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
      '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: '(/stories/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
};
