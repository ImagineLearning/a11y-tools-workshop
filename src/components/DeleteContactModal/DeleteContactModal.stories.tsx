import React, { useLayoutEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import DeleteContactModal, { DeleteContactModalProps } from './DeleteContactModal';
import ReactModal from 'react-modal';

const meta: Meta = {
	title: 'Delete Contact Modal',
	component: DeleteContactModal,
};

export default meta;

const Template: Story<DeleteContactModalProps> = (args) => {
	const [initialized, setInitialized] = useState(false);

	useLayoutEffect(() => {
		ReactModal.setAppElement('#modalRoot');
		setInitialized(true);
	}, []);

	return (
		<div id="modalRoot">
			{initialized && <DeleteContactModal {...args} />}
			<p>
				Leggings raclette meggings street art locavore cray, live-edge fashion axe vexillologist.
				Fingerstache chambray gastropub roof party shaman. Fanny pack pork belly meditation celiac
				scenester. Listicle organic butcher, chambray kombucha try-hard pinterest. Flexitarian
				subway tile mustache fingerstache schlitz, wolf knausgaard try-hard listicle craft beer ugh
				godard. Palo santo lo-fi lomo prism, bicycle rights retro kitsch echo park mlkshk vape
				ethical cred gentrify bitters copper mug.
			</p>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	isOpen: true,
	name: 'Carlton Banks',
};
