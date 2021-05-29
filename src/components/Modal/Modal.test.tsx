import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

describe('<Modal />', () => {
	it('renders modal with content', () => {
		const { getByText } = render(
			<Modal ariaHideApp={false} isOpen={true}>
				Hello modal!
			</Modal>
		);

		expect(getByText('Hello modal!')).toBeInTheDocument();
	});

	it('close button requests modal close', () => {
		const handleRequestClose = jest.fn();
		const { getByRole } = render(
			<Modal ariaHideApp={false} isOpen={true} onRequestClose={handleRequestClose}>
				Hello modal!
			</Modal>
		);

		userEvent.click(getByRole('button'));

		expect(handleRequestClose).toHaveBeenCalled();
	});
});
