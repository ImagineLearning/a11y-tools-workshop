import React from 'react';
import { render } from '@testing-library/react';
import EditContactModal from './EditContactModal';

describe('<EditContactModal />', () => {
	it('renders "Add Contact" heading if no initial value provided', () => {
		const { getByText } = render(<EditContactModal isOpen={true} ariaHideApp={false} />);
		expect(getByText('Add Contact')).toBeInTheDocument();
	});

	it('renders "Edit Contact" heading if initial value provided', () => {
		const { getByText } = render(
			<EditContactModal
				isOpen={true}
				ariaHideApp={false}
				initialValues={{
					id: 1,
					firstName: 'Carlton',
					lastName: 'Banks',
					email: 'carlton@example.com',
					phone: '555-555-5555',
					address: '805 St. Cloud Road\nBel Air\nLos Angeles, CA 90077',
				}}
			/>
		);
		expect(getByText('Edit Contact')).toBeInTheDocument();
	});
});
