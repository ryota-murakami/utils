import '@testing-library/jest-dom/vitest'

import { server } from './mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

//const originalError = console.error;
//beforeAll(() => {
//  console.error = (...args) => {
//    // Supress noisy DOM strcture error messages while "yarn test"
//    if (args[0].includes("Warning: validateDOMNesting(...)")) {
//      return;
//    }
//    originalError.call(console, ...args);
//  };
//});
//
//afterAll(() => {
//  console.error = originalError;
//});
