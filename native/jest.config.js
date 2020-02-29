module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [],
};
