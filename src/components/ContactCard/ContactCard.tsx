import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';

export interface ContactCardProps {
	className?: string;
	firstName: string;
	lastName: string;
	email?: string;
	phone?: string;
	address?: string;
}

export default function ContactCard({
	className,
	firstName,
	lastName,
	email,
	phone,
	address,
}: ContactCardProps) {
	return (
		<div className={classNames('flex flex-row p-3 border border-gray-300 rounded-md', className)}>
			<div className="mr-3 flex-shrink hidden sm:block text-2xl text-gray-500">
				<FontAwesomeIcon icon={faUser} />
			</div>
			<div className="flex-grow">
				<div className="font-bold text-lg">
					{lastName}, {firstName}
				</div>
				{email && (
					<div className="mt-2">
						<a className="text-blue-600 underline" href={`mailto:${email}`}>
							{email}
						</a>
					</div>
				)}
				{phone && (
					<div className="mt-2">
						<a className="text-blue-600 underline" href={`tel:${phone}`}>
							{phone}
						</a>
					</div>
				)}
				{address && (
					<div className="mt-2">
						{address.split(/\n/).map((part, index) => (
							<React.Fragment key={index}>
								{part}
								<br />
							</React.Fragment>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
