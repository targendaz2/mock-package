import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  passWithNoTests: true,
  preset: 'ts-jest/presets/default-esm',
  setupFilesAfterEnv: ['jest-extended-fs'],
  testEnvironment: 'node',
  testRegex: '.+\\.test\\.ts$',
};

export default config;
