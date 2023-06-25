const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalEventsTap: true,
  watchForFileChanges: false,
  numTestsKeptInMemory: 0,
  env: {
    NODE_OPTIONS: "--max-http-header-size=16384",
  },
  nodeOptions: "--max-old-space-size=4096",
  emitter: {
    setMaxListeners: 50,
  },
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //test
    },
  },
});
