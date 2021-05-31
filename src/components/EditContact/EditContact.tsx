import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { Contact } from '../../helpers/contact';
import Button from '../Button/Button';
import FormControl from '../FormControl/FormControl';
import { v4 as uuid } from 'uuid';

export interface EditContactProps {
	initialValues?: Contact;
	onCancel?(): void;
	onSubmit?(contact: Contact): void;
}

const validationSchema = yup.object().shape({
	firstName: yup.string().required('Enter your first name'),
	lastName: yup.string().required('Enter your last name'),
	email: yup.string().email('Enter a valid email address'),
	phone: yup.string().matches(/[0-9]{3}[-.]?[0-9]{3}[-.]?[0-9]{4}/, 'Enter a valid phone number'),
});

export default function EditContact({
	initialValues = { id: uuid(), firstName: '', lastName: '', email: '', phone: '', address: '' },
	onCancel,
	onSubmit,
}: EditContactProps) {
	const handleFormikSubmit = (values: Contact, { validateForm }: FormikHelpers<Contact>) => {
		onSubmit?.(values);
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleFormikSubmit}
				validationSchema={validationSchema}
				validateOnChange={false}
			>
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
					<form
						className="grid grid-cols-1 md:grid-cols-2 gap-4"
						onSubmit={handleSubmit}
						noValidate
					>
						<input type="hidden" name="id" value={values.id} />
						<FormControl
							error={touched.firstName ? errors.firstName : undefined}
							label="First Name"
							name="firstName"
							type="text"
							value={values.firstName}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<FormControl
							error={touched.lastName ? errors.lastName : undefined}
							label="Last Name"
							name="lastName"
							type="text"
							value={values.lastName}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<FormControl
							error={touched.email ? errors.email : undefined}
							label="Email Address"
							name="email"
							type="email"
							value={values.email}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<FormControl
							error={touched.phone ? errors.phone : undefined}
							label="Phone Number"
							name="phone"
							type="tel"
							value={values.phone}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<FormControl
							className="md:col-span-2"
							error={touched.address ? errors.address : undefined}
							label="Address"
							name="address"
							type="multiline"
							value={values.address}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<div className="pt-2 md:text-right md:col-span-2">
							<Button
								className="mb-2 w-full md:mb-2 md:mr-2 md:w-auto"
								type="submit"
								buttonType="primary"
							>
								<FontAwesomeIcon className="mr-2" icon={faCheck} />
								Save
							</Button>
							<Button className="w-full md:w-auto" type="button" onClick={onCancel}>
								<FontAwesomeIcon className="mr-2" icon={faBan} />
								Cancel
							</Button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
}
