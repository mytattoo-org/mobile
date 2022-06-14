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
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)'
  ],
  coverageDirectory: '<rootDir>/src/tests/jest/coverage',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  // setupFilesAfterEnv: ['<rootDir>/src/tests/jest/jest.setup.ts'], for global config imports,
  testMatch: ['<rootDir>/src/**/*.spec.tsx', '<rootDir>/src/**/*.spec.ts'],
  coveragePathIgnorePatterns: [
    'styles.ts',
    '.types.ts',
    '.stories.ts',
    '.stories.tsx',
    '<rootDir>/src/tests',
    '<rootDir>/src/styles',
    '<rootDir>/src/components/atoms/Icon/icons'
  ]
}

export default jestConfig
