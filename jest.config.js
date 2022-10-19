const path = require('path');

module.exports = {
  setupFilesAfterEnv: [`<rootDir>/setUpTests.js`],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
  }
};