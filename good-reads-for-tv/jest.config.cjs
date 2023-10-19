module.exports = {
    // other Jest configuration options...
    transformIgnorePatterns: [
      // This regex pattern matches files in 'node_modules' that you want to transform.
      // Modify it to match the specific files you need.
      '/node_modules/(?!some-package-to-transform/)',
    ],
    testEnvironment: 'jsdom',
    
  };