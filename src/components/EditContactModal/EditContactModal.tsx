import React from 'react';
import Modal, { ModalProps } from '../Modal/Modal';
import EditContact, { EditContactProps } from '../EditContact/EditContact';

export type EditContactModalProps = Omit<ModalProps, 'onRequestClose'> & EditContactProps;

export default function EditContactModal({
	ariaHideApp,
	className,
	initialValues,
	isOpen,
	onCancel,
	onSubmit,
}: EditContactModalProps) {
	return (
		<Modal
			aria={{ labelledby: 'add-edit-contact-heading' }}
			className={className}
			isOpen={isOpen}
			ariaHideApp={ariaHideApp}
			onRequestClose={onCancel}
		>
			<h1 id="add-edit-contact-heading" className="mb-4 font-bold text-xl">{`${
				initialValues ? 'Edit' : 'Add'
			} Contact`}</h1>
			<EditContact initialValues={initialValues} onCancel={onCancel} onSubmit={onSubmit} />
		</Modal>
	);
}
