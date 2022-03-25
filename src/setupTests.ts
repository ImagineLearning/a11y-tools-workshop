// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { rmdirSync } from 'fs';
import 'jest-axe/extend-expect';
import { JestAxeDevTools } from './testUtils/jestAxeDevTools';

const { getComputedStyle } = window;

// Patch window.getComputedStyle
// See: https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
window.getComputedStyle = (...args: Parameters<typeof getComputedStyle>) =>
	getComputedStyle(args?.[0]);

const axeReportDir = './axe-results';

beforeAll(() => {
	rmdirSync(axeReportDir, { recursive: true });
	JestAxeDevTools.initReporter('a11y-tools-workshop', axeReportDir);
});

afterAll(async () => {
	await Promise.all([
		JestAxeDevTools.reporter?.buildCSV(axeReportDir),
		JestAxeDevTools.reporter?.buildHTML(axeReportDir),
		JestAxeDevTools.reporter?.buildJUnitXML(axeReportDir),
	]);
	JestAxeDevTools.cleanUp();
});
