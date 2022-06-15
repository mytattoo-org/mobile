import type { Config } from '@jest/types'

const jestConfig: Config.InitialOptions = {
  preset: 'jest-expo',
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['node_modules', '<rootDir>'],
  coverageReporters: ['text-summary', 'lcov'],
  coverageDirectory: '<rootDir>/src/tests/jest/coverage',
  testMatch: ['<rootDir>/src/**/*spec.tsx', '<rootDir>/src/**/*spec.ts'],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/src/tests/jest/jest.setup.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'
  ],
  coveragePathIgnorePatterns: [
    'styles.ts',
    '.types.ts',
    '.stories.ts',
    '.stories.tsx',
    '<rootDir>/src/tests',
    '<rootDir>/src/styles',
    '<rootDir>/src/typescript',
    '<rootDir>/src/components/atoms/svg'
  ]
}

export default jestConfig
