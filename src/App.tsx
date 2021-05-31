import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo, useState } from 'react';
import Button from './components/Button/Button';
import ContactList from './components/ContactList/ContactList';
import DeleteContactModal from './components/DeleteContactModal/DeleteContactModal';
import EditContactModal from './components/EditContactModal/EditContactModal';
import SearchBox from './components/SearchBox/SearchBox';
import Tab from './components/Tab/Tab';
import TabContent from './components/TabContentPanel/TabContent';
import TabPanel from './components/TabPanel/TabPanel';
import { Contact, groupContacts, searchContacts, sortContacts } from './helpers/contact';

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
	const [search, setSearch] = useState('');

	const sortedContacts = useMemo(() => sortContacts(contacts), [contacts]);
	const contactGroups = useMemo(() => groupContacts(sortedContacts, TAB_GROUPS), [sortedContacts]);
	const searchResults = useMemo(
		() => (search ? searchContacts(sortedContacts, search) : []),
		[sortedContacts, search]
	);

	const handleSearchSubmit = (term: string) => {
		setSearch(term);
		setTab('search');
	};

	const handleClickTab = (value: string) => {
		setTab(value);
	};

	const handleClickAddContact = () => {
		setEditModalOpen(true);
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

	const handleSubmitEdit = (contact: Contact) => {
		setContacts((prev) => prev.filter(({ id }) => id !== contact.id).concat([contact]));
		setContact(undefined);
		setEditModalOpen(false);
	};

	const handleCancelDelete = () => {
		setContact(undefined);
		setDeleteModalOpen(false);
	};

	const handleConfirmDelete = () => {
		const { id: deleteId } = contact ?? {};
		if (deleteId) {
			setContacts((prev) => prev.filter(({ id }) => id !== deleteId));
		}
		setContact(undefined);
		setDeleteModalOpen(false);
	};

	return (
		<div className="max-w-5xl mx-auto p-4">
			<header className="flex flex-col md:flex-row mb-4">
				<h1 className="mb-2 md:flex-grow md:mb-0 md:mr-4 font-bold text-3xl">Address Book</h1>
				<div className="flex flex-row">
					<SearchBox
						className="flex-grow mr-4"
						placeholder="Search contacts..."
						onSubmit={handleSearchSubmit}
					/>
					<Button buttonType="default" onClick={handleClickAddContact}>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
				</div>
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
									emptyContent={<p className="pt-4 pb-8">No contacts.</p>}
									onClickDelete={handleClickDeleteContact}
									onClickEdit={handleClickEditContact}
								/>
							</TabContent>
						))}
						<TabContent tab="search">
							<h2 className="mb-2 font-bold text-xl">
								Search Results: <em className="font-normal">{search}</em>
							</h2>
							<ContactList
								contacts={searchResults}
								emptyContent={<p className="pb-8">No matching contacts found.</p>}
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
					onSubmit={handleSubmitEdit}
				/>
				<DeleteContactModal
					isOpen={deleteModalOpen}
					name={`${contact?.firstName} ${contact?.lastName}`}
					onClickCancel={handleCancelDelete}
					onClickConfirm={handleConfirmDelete}
				/>
			</main>
		</div>
	);
}
