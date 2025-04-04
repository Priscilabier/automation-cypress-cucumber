const { defineConfig } = require('cypress');
const cucumber = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify').default;

module.exports = defineConfig({
  projectId: 'fz8urw',
  e2e: {
    setupNodeEvents(on, config) {
      // Adicionar o Cucumber Preprocessor
      cucumber(on, config);
      
      // Configurar o Browserify para processar os arquivos feature
      on('file:preprocessor', browserify(config));
      
      return config;
    },
    supportFile: false,
    specPattern: '**/*.feature',  // Define onde encontrar os arquivos .feature
  },
});
