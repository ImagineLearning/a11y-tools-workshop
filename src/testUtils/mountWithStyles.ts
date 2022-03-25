import { mount } from '@cypress/react';
import { ReactNode } from 'react';
import '../index.css';

export default function mountWithStyles(jsx: ReactNode) {
	return mount(jsx);
}
