import React, { useLayoutEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import EditContactModal, { EditContactModalProps } from './EditContactModal';
import ReactModal from 'react-modal';

const meta: Meta = {
	title: 'Edit Contact Modal',
	component: EditContactModal,
};

export default meta;

const Template: Story<EditContactModalProps> = (args) => {
	const [initialized, setInitialized] = useState(false);

	useLayoutEffect(() => {
		ReactModal.setAppElement('#modalRoot');
		setInitialized(true);
	}, []);

	return (
		<div id="modalRoot">
			{initialized && <EditContactModal {...args} />}
			<p className="mb-4">
				Leggings raclette meggings street art locavore cray, live-edge fashion axe vexillologist.
				Fingerstache chambray gastropub roof party shaman. Fanny pack pork belly meditation celiac
				scenester. Listicle organic butcher, chambray kombucha try-hard pinterest. Flexitarian
				subway tile mustache fingerstache schlitz, wolf knausgaard try-hard listicle craft beer ugh
				godard. Palo santo lo-fi lomo prism, bicycle rights retro kitsch echo park mlkshk vape
				ethical cred gentrify bitters copper mug.
			</p>
			<p className="mb-4">
				Tote bag mustache chia, succulents single-origin coffee activated charcoal bitters gastropub
				williamsburg art party. Literally live-edge echo park deep v kickstarter, tumblr art party
				stumptown franzen roof party. Viral put a bird on it hella, tumblr drinking vinegar PBR&B
				gastropub post-ironic chartreuse quinoa locavore. Salvia cornhole synth, sartorial master
				cleanse brooklyn meh crucifix wayfarers. Gentrify man bun schlitz, lomo raclette plaid
				bitters echo park fingerstache fashion axe hoodie photo booth.
			</p>
			<p className="mb-4">
				Portland enamel pin palo santo, jianbing snackwave whatever prism plaid polaroid. Helvetica
				offal gentrify butcher austin williamsburg locavore, taiyaki 3 wolf moon hot chicken hella
				adaptogen DIY copper mug wolf. DIY pour-over iPhone offal affogato palo santo sartorial
				plaid copper mug meggings. Poutine hammock taxidermy typewriter flannel literally
				gluten-free bespoke XOXO, photo booth affogato small batch hashtag raclette 90's. Shoreditch
				adaptogen kale chips bespoke, locavore pinterest ramps chia lumbersexual offal mustache art
				party artisan leggings. Occupy lo-fi banh mi echo park locavore synth bitters sartorial
				seitan celiac tousled fixie ethical. Deep v organic forage, 8-bit kombucha tbh offal pork
				belly.
			</p>
			<p>
				Roof party literally flexitarian, mumblecore sartorial celiac 90's. Bushwick iPhone tote
				bag, sartorial mixtape gentrify typewriter. Messenger bag trust fund chambray venmo direct
				trade hell of. Listicle jianbing small batch authentic brooklyn. Master cleanse typewriter
				live-edge swag hashtag. Occupy adaptogen literally gluten-free roof party 3 wolf moon banjo
				heirloom leggings plaid. Gentrify fanny pack franzen cold-pressed, helvetica put a bird on
				it kogi taxidermy distillery mustache kitsch pour-over retro ennui.
			</p>
		</div>
	);
};

export const AddContact = Template.bind({});
AddContact.args = {
	isOpen: true,
};

export const EditContact = Template.bind({});
EditContact.args = {
	isOpen: true,
	initialValues: {
		id: 1,
		firstName: 'Carlton',
		lastName: 'Banks',
		email: 'carlton@example.com',
		phone: '555-555-5555',
		address: '805 St. Cloud Road\nBel Air\nLos Angeles, CA 90077',
	},
};
