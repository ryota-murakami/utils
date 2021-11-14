const config = {
  roots: ['<rootDir>'],
  verbose: true,
  notify: false,
  notifyMode: 'success-change',
  resetMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/react/setupTests.js'],
  testMatch: [
    '<rootDir>/react/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/utility/**/*.test.{js,ts}',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'esbuild-jest',
    '^.+\\.css$': '<rootDir>/.jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)':
      '<rootDir>/.jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'mjs', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverageFrom: [
    '<rootDir>/react/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/!react/**/*.d.ts',
    '<rootDir>/utility/**/*.{js,ts}',
  ],
}

module.exports = config
