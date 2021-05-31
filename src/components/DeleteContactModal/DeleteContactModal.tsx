import { faBan, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import Modal, { ModalProps } from '../Modal/Modal';

export interface DeleteContactModalProps extends Omit<ModalProps, 'onRequestClose'> {
	name?: string;
	onClickConfirm?(): void;
	onClickCancel?(): void;
}

export default function DeleteContactModal({
	className,
	name,
	onClickConfirm,
	onClickCancel,
	...modalProps
}: DeleteContactModalProps) {
	return (
		<Modal
			className={classNames('md:max-w-sm', className)}
			onRequestClose={onClickCancel}
			{...modalProps}
		>
			<p className="my-2 text-center">
				Are you sure want to delete <strong>{name}</strong> from your contacts?
			</p>
			<p className="mb-4 text-center">This action cannot be undone.</p>
			<div className="md:text-right">
				<Button
					className="mb-2 w-full md:mb-0 md:w-auto md:mr-2"
					type="button"
					buttonType="alert"
					onClick={onClickConfirm}
				>
					<FontAwesomeIcon className="mr-2" icon={faTrash} />
					Yes
				</Button>
				<Button
					className="w-full md:w-auto"
					type="button"
					buttonType="default"
					onClick={onClickCancel}
				>
					<FontAwesomeIcon className="mr-2" icon={faBan} />
					No
				</Button>
			</div>
		</Modal>
	);
}
