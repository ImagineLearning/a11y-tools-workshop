import React from 'react';
import Modal, { ModalProps } from '../Modal/Modal';
import EditContact, { EditContactProps } from '../EditContact/EditContact';

export type EditContactModalProps = ModalProps & EditContactProps;

export default function EditContactModal({
	ariaHideApp,
	className,
	initialValues,
	isOpen,
	onCancel,
	onRequestClose,
	onSubmit,
}: EditContactModalProps) {
	return (
		<Modal
			className={className}
			isOpen={isOpen}
			ariaHideApp={ariaHideApp}
			onRequestClose={onRequestClose}
		>
			<h1 className="mb-4 font-bold text-xl">{`${initialValues ? 'Edit' : 'Add'} Contact`}</h1>
			<EditContact initialValues={initialValues} onCancel={onCancel} onSubmit={onSubmit} />
		</Modal>
	);
}
