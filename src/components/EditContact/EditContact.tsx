import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Contact } from '../../models/contact';
import Button from '../Button/Button';
import FormControl from '../FormControl/FormControl';

export interface EditContactProps {
	initialValues?: Contact;
	onSubmit?(contact: Contact): void;
}

export default function EditContact({
	initialValues = { firstName: '', lastName: '', email: '', phone: '', address: '' },
	onSubmit,
}: EditContactProps) {
	const handleFormikSubmit = (values: Contact, { validateForm }: FormikHelpers<Contact>) => {
		onSubmit?.(values);
	};

	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
				{({ values, handleChange, handleSubmit }) => (
					<form
						className="grid grid-cols-1 md:grid-cols-2 gap-4"
						onSubmit={handleSubmit}
						noValidate
					>
						<FormControl
							label="First Name"
							name="firstName"
							type="text"
							value={values.firstName}
							onChange={handleChange}
						/>
						<FormControl
							label="Last Name"
							name="lastName"
							type="text"
							value={values.lastName}
							onChange={handleChange}
						/>
						<FormControl
							label="Email Address"
							name="email"
							type="email"
							value={values.email}
							onChange={handleChange}
						/>
						<FormControl
							label="Phone Number"
							name="phone"
							type="tel"
							value={values.phone}
							onChange={handleChange}
						/>
						<FormControl
							className="col-span-2"
							label="Address"
							name="address"
							type="multiline"
							value={values.address}
							onChange={handleChange}
						/>
						<div className="pt-2 text-right md:col-span-2">
							<Button className="mr-2" type="submit" buttonType="primary">
								<FontAwesomeIcon icon={faCheck} />
							</Button>
							<Button type="button">
								<FontAwesomeIcon icon={faBan} />
							</Button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
}
