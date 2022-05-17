/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  testEnviroment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
}
