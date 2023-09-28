module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'components/{atoms,molecules,organisms}/**/*.{ts,tsx}',
    'utils/**/*.{ts,tsx}',
    '!**/*.spec.+{js|jsx|ts|tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: ['json', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/*.spec.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__tests__/fileMock.js',
  },
}
