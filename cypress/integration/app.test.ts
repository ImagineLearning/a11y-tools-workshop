describe('App integration tests', () => {
	it('loads empty contact list on first run', () => {
		cy.visit('/');
		cy.get('.TabPanel > div > div').should('contain', 'No contacts.');
	});

	it('loads saved contacts from local storage', () => {
		localStorage.setItem(
			'contacts',
			JSON.stringify([
				{
					id: 1,
					firstName: 'Bob',
					lastName: 'Bobertson',
					email: 'bob@example.com',
					phone: '555-555-5555',
					address: '1234 Street\nAnytown, USA',
				},
			])
		);

		cy.visit('/');
		cy.get('.TabPanel > div > div').should('contain', 'Bobertson, Bob');
	});

	it('form adds contact to list', () => {
		cy.visit('/');
		cy.get('header svg[data-icon="plus"]').click();

		cy.get('input[name="firstName"').type('Bob');
		cy.get('input[name="lastName"').type('Bobertson');
		cy.get('input[name="email"').type('bob@example.com');
		cy.get('input[name="phone"').type('555-555-5555');
		cy.get('textarea[name="address"').type('1234 Street\nAnytown, USA');

		cy.get('.ReactModal__Content button[type="submit"]').click();

		cy.get('.TabPanel > div > div').should('contain', 'Bobertson, Bob');
	});
});
