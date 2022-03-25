import axe, { Ruleset } from '@axe-devtools/browser';
import Reporter from '@axe-devtools/reporter';
import { AxeResults } from 'axe-core';

export class JestAxeDevTools {
	static reporter?: Reporter;

	constructor(private rules: Ruleset = 'wcag2', private reporter = JestAxeDevTools.reporter) {}

	static cleanUp() {
		delete JestAxeDevTools.reporter;
	}

	static initReporter(suiteName = 'a11y-tools-workshop', directory = 'axe-results') {
		JestAxeDevTools.reporter = new Reporter(suiteName, directory);
	}

	init() {
		return new Promise<void>((resolve, reject) => {
			axe.init(this.rules, (err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve();
			});
		});
	}

	run(container: HTMLElement, scanName?: string) {
		return new Promise<AxeResults>((resolve, reject) => {
			axe.run(container, (err, results) => {
				if (err) {
					reject(err);
					return;
				}
				// `Reporter` type is missing `logTestResult` so we'll just
				// cast it as `any` to keep the compiler happy.
				(this.reporter as any)?.logTestResult(scanName, results);
				resolve(results);
			});
		});
	}
}

export interface JestAxeDevToolsConfig {
	rules?: Ruleset;
	reporter?: Reporter;
}

export default async function jestAxeDevTools(
	elem: HTMLElement,
	scanName?: string,
	{ rules, reporter }: JestAxeDevToolsConfig = {}
) {
	const axe = new JestAxeDevTools(rules, reporter);
	await axe.init();
	return axe.run(elem, scanName);
}
