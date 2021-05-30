import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo, useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import DeleteContactModal from './components/DeleteContactModal/DeleteContactModal';
import EditContactModal from './components/EditContactModal/EditContactModal';
import Tab from './components/Tab/Tab';
import TabContent from './components/TabContentPanel/TabContent';
import TabPanel from './components/TabPanel/TabPanel';
import { Contact } from './models/contact';
import groupBy from 'lodash-es/groupBy';

const CONTACTS = [
	{
		id: 1,
		firstName: 'Aaron',
		lastName: 'Aaronson',
		email: 'aaron@example.com',
		phone: '555-123-4567',
		address: '1234 Street\nAnytown, USA',
	},
	{
		id: 2,
		firstName: 'Bob',
		lastName: 'Bobertson',
		email: 'bob@example.com',
		phone: '555-123-4568',
		address: '1235 Street\nAnytown, USA',
	},
	{
		id: 3,
		firstName: 'Chandler',
		lastName: 'Chandlerson',
		email: 'chandler@example.com',
		phone: '555-123-4569',
		address: '1236 Street\nAnytown, USA',
	},
];

const TAB_GROUPS = ['a-h', 'i-p', 'q-z'];

export default function App() {
	const [tab, setTab] = useState('a-h');
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [contacts, setContacts] = useState<Contact[]>(CONTACTS);
	const [contact, setContact] = useState<Contact | undefined>();

	const contactGroups = useMemo(
		() =>
			groupBy(contacts, ({ lastName }) => {
				const initial = lastName.toLowerCase().charCodeAt(0);
				if (initial >= 97 && initial < 105) {
					return 'a-h';
				}
				if (initial >= 105 && initial < 113) {
					return 'i-p';
				}
				return 'q-z';
			}),
		[contacts]
	);

	const handleClickTab = (value: string) => {
		setTab(value);
	};

	const handleClickDeleteContact = (contact: Contact) => {
		setContact(contact);
		setDeleteModalOpen(true);
	};

	const handleClickEditContact = (contact: Contact) => {
		setContact(contact);
		setEditModalOpen(true);
	};

	const handleCancelEdit = () => {
		setContact(undefined);
		setEditModalOpen(false);
	};

	const handleCancelDelete = () => {
		setContact(undefined);
		setDeleteModalOpen(false);
	};

	return (
		<div className="max-w-5xl mx-auto p-4">
			<header className="mb-4">
				<h1 className="font-bold text-3xl">Address Book</h1>
			</header>
			<main>
				<TabPanel
					tabs={
						<>
							{TAB_GROUPS.map((group) => (
								<Tab key={group} className="font-bold" value={group}>
									{group
										.split('-')
										.map((char) => char.toUpperCase())
										.join(' - ')}
								</Tab>
							))}
							<Tab className="font-bold" value="search">
								<FontAwesomeIcon icon={faSearch} />
							</Tab>
						</>
					}
					selected={tab}
					onClickTab={handleClickTab}
				>
					<>
						{TAB_GROUPS.map((group) => (
							<TabContent key={group} tab={group}>
								<ContactList
									contacts={contactGroups[group]}
									onClickDelete={handleClickDeleteContact}
									onClickEdit={handleClickEditContact}
								/>
							</TabContent>
						))}
						<TabContent tab="search">
							<h2 className="mb-2 font-bold text-xl">Search Results</h2>
							<ContactList
								contacts={[]}
								onClickDelete={handleClickDeleteContact}
								onClickEdit={handleClickEditContact}
							/>
						</TabContent>
					</>
				</TabPanel>
				<EditContactModal
					isOpen={editModalOpen}
					initialValues={contact}
					onCancel={handleCancelEdit}
				/>
				<DeleteContactModal
					isOpen={deleteModalOpen}
					name={`${contact?.firstName} ${contact?.lastName}`}
					onClickCancel={handleCancelDelete}
				/>
			</main>
		</div>
	);
}
