module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',

  testMatch: [
    '<rootDir>/src/**/*.(spec|test).ts',
    '<rootDir>/src/**/*.(spec|test|snapshot).tsx',
  ],
  moduleNameMapper: {
    '.(css|less|scss)$': 'identity-obj-proxy',
  },

  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  clearMocks: true,
  resetMocks: true,
  resetModules: true,
  restoreMocks: true,

  silent: false,
  verbose: true,
};
