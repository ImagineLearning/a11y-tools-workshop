import React, { PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
import TabContentPanel, { TabContentPanelProps } from './TabContentPanel';
import TabContent from './TabContent';

const meta: Meta = {
	title: 'Tab Content Panel',
	component: TabContentPanel,
	argTypes: {
		selected: {
			options: ['tab1', 'tab2'],
			control: { type: 'radio' },
		},
	},
};

export default meta;

const Template: Story<PropsWithChildren<TabContentPanelProps>> = (args) => (
	<TabContentPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
	selected: 'tab1',
	children: (
		<>
			<TabContent tab="tab1">
				<h1 className="mb-4 text-xl font-bold">Tab 1</h1>
				<p className="mb-4">
					Biodiesel shaman humblebrag vice air plant disrupt marfa copper mug fam health goth
					kinfolk you probably haven't heard of them street art vape. Unicorn prism gochujang, cloud
					bread irony biodiesel brooklyn quinoa blue bottle truffaut cray pickled marfa banh mi
					distillery. Wayfarers hammock try-hard subway tile portland kogi viral. Four loko
					pinterest succulents, trust fund wayfarers four dollar toast quinoa raclette keytar
					farm-to-table microdosing helvetica. Gluten-free pitchfork live-edge mumblecore roof
					party. Mixtape palo santo williamsburg tattooed bushwick woke adaptogen edison bulb forage
					trust fund kogi humblebrag gluten-free street art.
				</p>
				<p>
					VHS synth marfa, normcore jean shorts selfies try-hard meditation bespoke truffaut chia
					asymmetrical. Food truck hashtag kinfolk microdosing, single-origin coffee letterpress
					lo-fi cliche. Celiac put a bird on it PBR&B drinking vinegar gochujang. Mustache vice
					stumptown craft beer letterpress heirloom viral tumblr flannel direct trade. DIY readymade
					poutine drinking vinegar coloring book af pickled next level succulents trust fund fixie
					tote bag swag PBR&B knausgaard. Vaporware seitan bushwick deep v, yr fanny pack echo park
					kinfolk street art. Woke normcore lo-fi glossier skateboard, sustainable forage banjo lyft
					pok pok locavore portland plaid.
				</p>
			</TabContent>
			<TabContent tab="tab2">
				<h1 className="mb-4 text-xl font-bold">Tab 2</h1>
				<p className="mb-4">
					La croix occupy next level hella sriracha PBR&B succulents blog heirloom sartorial
					typewriter blue bottle pork belly pok pok celiac. Lomo mumblecore tumblr edison bulb
					sriracha master cleanse live-edge wolf enamel pin. Keffiyeh keytar freegan 90's, fixie
					distillery listicle glossier cold-pressed palo santo disrupt hashtag celiac kinfolk
					slow-carb. Master cleanse pug snackwave, disrupt selvage mustache knausgaard forage salvia
					plaid franzen offal meggings whatever. Shabby chic four dollar toast deep v flexitarian
					distillery raclette beard locavore af raw denim.
				</p>
				<p>
					Tumeric truffaut wayfarers salvia pork belly hella polaroid fashion axe next level tbh
					food truck narwhal post-ironic flexitarian ethical. Crucifix banh mi messenger bag man
					bun. Pork belly polaroid snackwave wolf lo-fi humblebrag jean shorts activated charcoal.
					Small batch pug iPhone, bushwick cloud bread photo booth ethical schlitz you probably
					haven't heard of them.
				</p>
			</TabContent>
		</>
	),
};
