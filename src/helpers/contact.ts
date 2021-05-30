import groupBy from 'lodash-es/groupBy';
import sortBy from 'lodash-es/sortBy';

export interface Contact {
	id: string | number;
	firstName: string;
	lastName: string;
	email?: string;
	phone?: string;
	address?: string;
}

export function groupContacts(contacts: Contact[], groups: string[]) {
	const groupKeys = groups.reduce((acc, key) => {
		const [start, end] = key.split('-').map((k) => k.charCodeAt(0));
		return [...acc, { key, start, end }];
	}, [] as { key: string; start: number; end: number }[]);

	return groupBy(contacts, ({ lastName }) => {
		const initial = lastName.toLowerCase().charCodeAt(0);
		const { key } = groupKeys.find(({ start, end }) => initial >= start && initial <= end) ?? {};
		return key;
	});
}

export function sortContacts(contacts: Contact[]) {
	return sortBy(contacts, ['lastName', 'firstName']);
}

export function searchContacts(contacts: Contact[], term?: string) {
	if (!term) {
		return contacts;
	}

	const regex = new RegExp(term, 'i');
	return contacts.filter((contact) =>
		Object.values(contact)
			.filter((v) => !!v)
			.reduce((match, v) => match || regex.test(v), false)
	);
}
