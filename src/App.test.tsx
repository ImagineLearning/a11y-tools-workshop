import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import ReactModal from 'react-modal';

describe('<App />', () => {
	let modalRoot: HTMLElement;

	beforeEach(() => {
		modalRoot = document.createElement('div');
		modalRoot.setAttribute('id', 'modal-root');
		document.body.appendChild(modalRoot);

		ReactModal.setAppElement(modalRoot);
	});

	afterEach(() => {
		document.body.removeChild(modalRoot);
	});

	it('renders heading', () => {
		const { getByText } = render(<App />);
		expect(getByText('Address Book')).toBeInTheDocument();
	});

	it('adds contact', async () => {
		const { getByText, getAllByRole } = render(<App />);

		const addButton = getAllByRole('button').find((button) =>
			/border-gray-300 bg-gray-100/.test(button.className)
		);

		userEvent.click(addButton);

		const inputs = getAllByRole('textbox');

		const firstNameField = inputs.find((input) => (input as HTMLInputElement).name === 'firstName');
		userEvent.type(firstNameField, 'Bob');

		const lastNameField = inputs.find((input) => (input as HTMLInputElement).name === 'lastName');
		userEvent.type(lastNameField, 'Bobertson');

		const submitButton = getAllByRole('button').find(
			(button) =>
				(button as HTMLButtonElement).type === 'submit' &&
				/border-blue-500 bg-blue-600/.test(button.className)
		);
		userEvent.click(submitButton);

		await waitFor(() => {
			expect(getByText('Bobertson, Bob')).toBeInTheDocument();
		});
	});
});
