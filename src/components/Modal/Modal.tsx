import React, { PropsWithChildren, useLayoutEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';
import './Modal.css';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

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
	const [hasOverlayRef, setHasOverlayRef] = useState(false);
	const overlayRef = useRef(null);
	const rootRef = useRef<Element>(null);

	useLayoutEffect(() => {
		if (!hasOverlayRef || !!rootRef.current) {
			return;
		}

		rootRef.current = findAppRoot(overlayRef.current);
		if (!rootRef.current) {
			return;
		}

		const classes = new Set(rootRef.current.className?.split(' ').filter((c) => !!c) ?? []);
		classes.add('Modal__AppRoot');
		rootRef.current.className = [...classes.values()].join(' ');
	}, [hasOverlayRef]);

	return (
		<ReactModal
			ariaHideApp={ariaHideApp}
			className={classNames(
				'w-full h-full sm:h-auto sm:max-h-screen overflow-y-auto sm:mx-4 md:mx-0 md:w-5/6 lg:w-2/3 xl:w-1/2 p-4 border border-gray-300 sm:rounded-md bg-white',
				className
			)}
			isOpen={isOpen}
			overlayClassName="fixed top-0 left-0 h-screen w-full flex flex-col justify-center items-center bg-black bg-opacity-70"
			overlayRef={(node) => {
				overlayRef.current = node;
				setHasOverlayRef(true);
			}}
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

function findAppRoot(child: Element | null) {
	if (!child?.parentElement) {
		return null;
	}
	return (
		child.parentElement.querySelector('div[aria-hidden=true]') ?? findAppRoot(child.parentElement)
	);
}
