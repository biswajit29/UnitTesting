import type {Config} from '@jest/types'
const baseDir = '<rootDir>/src/app/doubles'
const baseTestDir = '<rootDir>/src/test/doubles'
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    // Notes: implement code coverage only after completion of writing tests as this consumes a bit of TimeRanges.
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
    ],
    testMatch: [`${baseTestDir}/**/*.ts`]
}

export default config;