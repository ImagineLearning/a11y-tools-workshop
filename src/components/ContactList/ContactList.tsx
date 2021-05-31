import React, { ReactNode } from 'react';
import { Contact } from '../../helpers/contact';
import ContactCard from '../ContactCard/ContactCard';

export interface ContactListProps {
	className?: string;
	contacts?: Contact[];
	emptyContent?: ReactNode;
	title?: string;
	onClickEdit?(contact: Contact): void;
	onClickDelete?(contact: Contact): void;
}

function ContactList({
	className,
	contacts = [],
	emptyContent = null,
	title,
	onClickDelete,
	onClickEdit,
}: ContactListProps) {
	return (
		<div className={className}>
			{title && <h2 className="mb-2 font-bold text-xl">{title}</h2>}
			{contacts.length ? (
				<ul>
					{contacts.map((contact) => (
						<li key={contact.id} className="mt-2">
							<ContactCard
								{...contact}
								onClickDelete={() => onClickDelete?.(contact)}
								onClickEdit={() => onClickEdit?.(contact)}
							/>
						</li>
					))}
				</ul>
			) : (
				emptyContent
			)}
		</div>
	);
}

export default React.memo(ContactList);
