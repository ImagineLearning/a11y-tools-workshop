import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ContactList from './components/ContactList/ContactList';
import EditContactModal from './components/EditContactModal/EditContactModal';
import Tab from './components/Tab/Tab';
import TabContent from './components/TabContentPanel/TabContent';
import TabPanel from './components/TabPanel/TabPanel';
import { Contact } from './models/contact';

const contacts = [
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

export default function App() {
	const [tab, setTab] = useState('a-h');
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [contact, setContact] = useState<Contact | undefined>();

	const handleClickTab = (value: string) => {
		setTab(value);
	};

	const handleClickEditContact = (contact: Contact) => {
		setContact(contact);
		setEditModalOpen(true);
	};

	const handleCancelEdit = () => {
		setContact(undefined);
		setEditModalOpen(false);
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
							<Tab className="font-bold" value="a-h">
								A - H
							</Tab>
							<Tab className="font-bold" value="i-p">
								I - P
							</Tab>
							<Tab className="font-bold" value="q-z">
								Q - Z
							</Tab>
							<Tab className="font-bold" value="search">
								<FontAwesomeIcon icon={faSearch} />
							</Tab>
						</>
					}
					selected={tab}
					onClickTab={handleClickTab}
				>
					<TabContent tab="a-h">
						<ContactList contacts={contacts} onClickEdit={handleClickEditContact} />
					</TabContent>
					<TabContent tab="i-p">
						<ContactList contacts={[]} onClickEdit={handleClickEditContact} />
					</TabContent>
					<TabContent tab="q-z">
						<ContactList contacts={[]} onClickEdit={handleClickEditContact} />
					</TabContent>
					<TabContent tab="search">
						<h2 className="mb-2 font-bold text-xl">Search Results</h2>
						<ContactList contacts={[]} onClickEdit={handleClickEditContact} />
					</TabContent>
				</TabPanel>
				<EditContactModal
					isOpen={editModalOpen}
					initialValues={contact}
					onCancel={handleCancelEdit}
				/>
			</main>
		</div>
	);
}
