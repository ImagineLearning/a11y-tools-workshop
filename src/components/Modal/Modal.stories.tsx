import React, { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import ReactModal from 'react-modal';

const meta: Meta = {
	title: 'Modal',
	component: Modal,
};

export default meta;

const Template: Story<PropsWithChildren<ModalProps>> = (args) => {
	const [initialized, setInitialized] = useState(false);

	useLayoutEffect(() => {
		ReactModal.setAppElement('#modalRoot');
		setInitialized(true);
	}, []);

	return (
		<div id="modalRoot">
			{initialized && <Modal {...args} />}
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

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<h1 className="mb-4 text-xl font-bold">Modal Content</h1>
			<p>
				Meditation cronut food truck tbh master cleanse. Hot chicken occupy intelligentsia
				sartorial. Air plant kale chips small batch taxidermy XOXO readymade keytar artisan chia
				mumblecore kogi DIY irony pop-up. Chartreuse air plant fashion axe iceland art party, ramps
				beard affogato vinyl.
			</p>
		</>
	),
	isOpen: true,
};

export const Large = Template.bind({});
Large.args = {
	children: (
		<>
			<h1 className="mb-4 text-xl font-bold">Modal Content</h1>
			<p className="mb-4">
				Meditation cronut food truck tbh master cleanse. Hot chicken occupy intelligentsia
				sartorial. Air plant kale chips small batch taxidermy XOXO readymade keytar artisan chia
				mumblecore kogi DIY irony pop-up. Chartreuse air plant fashion axe iceland art party, ramps
				beard affogato vinyl.
			</p>
			<p className="mb-4">
				Mumblecore truffaut marfa, tofu trust fund ramps lyft. Cardigan gochujang seitan readymade
				tbh you probably haven't heard of them ennui pork belly franzen letterpress YOLO shoreditch
				glossier. Tacos intelligentsia lomo scenester blog direct trade fanny pack four dollar toast
				VHS kickstarter hell of. Intelligentsia literally crucifix, put a bird on it four dollar
				toast vape try-hard tattooed chartreuse locavore selvage meh butcher bitters activated
				charcoal.
			</p>
			<p className="mb-4">
				Listicle brooklyn ethical, gluten-free gochujang four loko whatever literally fixie. Pabst
				artisan lomo street art, poke bitters craft beer subway tile. Activated charcoal plaid
				messenger bag, artisan sartorial vegan pitchfork godard chillwave sustainable actually.
				Chillwave wolf pug asymmetrical, butcher letterpress beard cardigan 8-bit glossier. Whatever
				farm-to-table listicle meggings, affogato adaptogen dreamcatcher cred DIY health goth pork
				belly.
			</p>
			<p className="mb-4">
				Heirloom occupy lomo normcore four loko church-key. Hashtag pour-over aesthetic bicycle
				rights, typewriter cray vaporware cornhole blog helvetica succulents umami selvage portland.
				Blue bottle pug tousled squid master cleanse flannel. Hella enamel pin organic knausgaard
				blue bottle jianbing small batch aesthetic vegan migas hexagon.
			</p>
			<p>
				Asymmetrical tumeric chicharrones, flexitarian yr bitters mlkshk mustache pour-over glossier
				kale chips umami. XOXO post-ironic four loko, leggings fanny pack ethical 3 wolf moon. Af
				church-key vexillologist, fashion axe tacos coloring book narwhal letterpress heirloom
				plaid. Hella put a bird on it chillwave, bicycle rights roof party schlitz master cleanse.
				Prism lo-fi franzen kombucha, DIY iceland ennui messenger bag man braid.
			</p>
		</>
	),
	isOpen: true,
};
