// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@axe-devtools/cypress';
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

after(() => {
	const resultsDir = './axe-results/';
	cy.getAxeResults().then((results) => {
		// create the directory with results
		cy.writeFile(`${resultsDir}results.json`, results);
	});
	cy.task('reportAsHTML', { resultsDir });
	cy.task('reportAsJunit', { resultsDir });
});
