import { render } from '@testing-library/react';
import React from 'react';
import ContactCard from './ContactCard';

describe('<ContactCard />', () => {
	it('renders contact info', () => {
		const { getByText } = render(
			<ContactCard
				firstName="John"
				lastName="Doe"
				email="john@example.com"
				phone="555-555-5555"
				address={'1234 Street\nAnytown, USA'}
			/>
		);
		expect(getByText('Doe, John')).toBeInTheDocument();
		expect(getByText('john@example.com')).toBeInTheDocument();
		expect(getByText('555-555-5555')).toBeInTheDocument();
		expect(getByText(/1234 Street/)).toBeInTheDocument();
	});
});
