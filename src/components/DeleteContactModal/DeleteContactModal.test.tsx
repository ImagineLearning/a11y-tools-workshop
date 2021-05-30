import React from 'react';
import { render } from '@testing-library/react';
import DeleteContactModal from './DeleteContactModal';
import userEvent from '@testing-library/user-event';

describe('<DeleteContactModal />', () => {
	it('renders contact name in content', () => {
		const { getByText } = render(
			<DeleteContactModal isOpen={true} ariaHideApp={false} name="Carlton Banks" />
		);
		expect(getByText(/Carlton Banks/)).toBeInTheDocument();
	});

	it('"Yes" button calls onClickConfirm() handler', () => {
		const handleClickConfirm = jest.fn();
		const { getByText } = render(
			<DeleteContactModal
				isOpen={true}
				ariaHideApp={false}
				name="Carlton Banks"
				onClickConfirm={handleClickConfirm}
			/>
		);
		const button = getByText(/Yes/);
		userEvent.click(button);

		expect(handleClickConfirm).toHaveBeenCalled();
	});

	it('"No" button calls onClickCancel() handler', () => {
		const handleClickCancel = jest.fn();
		const { getByText } = render(
			<DeleteContactModal
				isOpen={true}
				ariaHideApp={false}
				name="Carlton Banks"
				onClickCancel={handleClickCancel}
			/>
		);
		const button = getByText(/No/);
		userEvent.click(button);

		expect(handleClickCancel).toHaveBeenCalled();
	});
});
