/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require('fs');
const path = './cypress/downloads/Tenant Exposure.xlsx'
const path2 = './cypress/downloads/Line Item Export.xlsx'
const path3 = './cypress/downloads/Lease Export.xlsx'


module.exports = (on, config) => {
  
  on("file:preprocessor", cucumber());
  on('task', {
    unlink(path) {
      try {
        fs.unlinkSync(path)
        //file removed
      } catch(err) {
        console.error(err)
      }
      return null;
    }
  })
  on('task', {
    unlink2(path2) {
      try {
        fs.unlinkSync(path2)
        //file removed
      } catch(err) {
        console.error(err)
      }
      return null;
    }
  })
  on('task', {
    unlink3(path3) {
      try {
        fs.unlinkSync(path3)
        //file removed
      } catch(err) {
        console.error(err)
      }
      return null;
    }
  })
}

