module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
