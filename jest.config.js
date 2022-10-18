const path = require('path');

module.exports = {
  setupFilesAfterEnv: [`<rootDir>/setUpTests.js`],
  testEnvironment: 'jsdom'
};