/// <reference types="Cypress" />

describe('Treatments', () => {
	beforeEach(() => {
		cy.task('seedDatabase');
	});
	it('should display a list of fetched treatments', () => {
		cy.visit('/');
		cy.get('[data-cy="treatment-item"]').should('have.length', 2);
	});
	it('should add a new treatment', () => {
		cy.intercept('POST', '/treatments/new*', 'success').as('createTreatment');
		cy.login();
		cy.visit('/treatments/new');
		cy.get('[data-cy="title"]').click();
		cy.get('[data-cy="title"]').type('TestTitle1');
		cy.get('[data-cy="body"]').type('TestBody1');
		cy.get('[data-cy="create-treatment"]').click();
		cy.wait('@createTreatment')
			.its('request.body')
			.should('match', /TestTitle1.*TestBody1/);
	});
});
