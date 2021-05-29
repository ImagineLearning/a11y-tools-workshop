import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import ReactModal from 'react-modal';
import Button from '../Button/Button';
import './Modal.css';

export type ModalProps = Pick<
	ReactModal.Props,
	'ariaHideApp' | 'className' | 'isOpen' | 'onRequestClose'
>;

export default function Modal({
	ariaHideApp = true,
	children,
	className,
	isOpen,
	onRequestClose,
}: PropsWithChildren<ModalProps>) {
	return (
		<ReactModal
			ariaHideApp={ariaHideApp}
			className={classNames(
				'w-full h-full sm:h-auto sm:max-h-screen overflow-y-auto sm:mx-4 md:mx-0 md:w-5/6 lg:w-2/3 xl:w-1/2 p-4 border border-gray-300 sm:rounded-md bg-white',
				className
			)}
			isOpen={isOpen}
			overlayClassName="fixed top-0 left-0 h-screen w-full flex flex-col justify-center items-center bg-black bg-opacity-60"
			shouldCloseOnEsc={true}
			shouldCloseOnOverlayClick={true}
			onRequestClose={onRequestClose}
		>
			<Button className="float-right -mt-3 -mr-2" buttonType="clear" onClick={onRequestClose}>
				<FontAwesomeIcon icon={faTimes} />
			</Button>
			{children}
		</ReactModal>
	);
}
