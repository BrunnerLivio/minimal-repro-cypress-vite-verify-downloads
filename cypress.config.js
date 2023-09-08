const { verifyDownloadTasks } = require('cy-verify-downloads')
const { defineConfig } = require('cypress')
const vitePreprocessor = require('cypress-vite')

///////////////////////////////////////////////////////////////////////////////

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor())
      on('task', verifyDownloadTasks)

      return config
    },
    experimentalRunAllSpecs: true,
    experimentalMemoryManagement: true,
  },
  numTestsKeptInMemory: 10,
})
