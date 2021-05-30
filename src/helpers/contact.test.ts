import { Contact, groupContacts, searchContacts } from './contact';

describe('contact helpers', () => {
	let contacts: Contact[];

	beforeEach(() => {
		contacts = [
			{
				id: 1,
				firstName: 'Bob',
				lastName: 'Bobertson',
				email: 'bob@example.com',
				phone: '555-123-4567',
				address: '1234 StreetAnytown, USA',
			},
			{
				id: 2,
				firstName: 'John',
				lastName: 'Johnson',
				email: 'john@example.com',
				phone: '555-123-4568',
				address: '1235 StreetAnytown, USA',
			},
			{
				id: 3,
				firstName: 'Ron',
				lastName: 'Ronson',
				email: 'ron@example.com',
				phone: '555-123-4569',
				address: '1236 StreetAnytown, USA',
			},
		];
	});

	describe('groupContacts(..)', () => {
		it('puts contacts in appropriate groups', () => {
			const results = groupContacts(contacts, ['a-h', 'i-p', 'q-z']);

			expect(results).toEqual({
				'a-h': [contacts[0]],
				'i-p': [contacts[1]],
				'q-z': [contacts[2]],
			});
		});
	});

	describe('searchContacts(..)', () => {
		it('returns full list of no search term specified', () => {
			const results = searchContacts(contacts);
			expect(results).toEqual(contacts);
		});

		it('matches first name', () => {
			const results = searchContacts(contacts, 'john');
			expect(results).toEqual([contacts[1]]);
		});

		it('matches last name', () => {
			const results = searchContacts(contacts, 'johns');
			expect(results).toEqual([contacts[1]]);
		});

		it('matches email address', () => {
			const results = searchContacts(contacts, 'john@');
			expect(results).toEqual([contacts[1]]);
		});

		it('matches phone number', () => {
			const results = searchContacts(contacts, '4568');
			expect(results).toEqual([contacts[1]]);
		});

		it('matches address', () => {
			const results = searchContacts(contacts, '1235 Street');
			expect(results).toEqual([contacts[1]]);
		});
	});
});
