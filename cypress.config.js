const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wjvowv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    baseUrl: "http://lojaebac.ebaconline.art.br/"    
  },
});
