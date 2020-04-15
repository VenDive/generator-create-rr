module.export = {
  roots: ['<rootDir>/src'],
  transform: {
    // '\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.js': '<rootDir>/node_modules/jest',
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ], // setupFiles before the tests are ran
  transformIgnorePatterns: ['/node_modules/(?!(our-react-components-.*?\\.js$))'],
  verbose: true,
  collectCoverage: false,
  testResultsProcessor: 'jest-sonar-reporter'
};
