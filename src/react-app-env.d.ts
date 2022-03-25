/// <reference types="react-scripts" />

declare module '@axe-devtools/browser' {
	import Analytics from '@deque/metrics-library';
	import axe from 'axe-core';
	export type Resolve = (value?: unknown) => void;
	export type Reject = (reason?: any) => void;
	export type Ruleset = '508' | 'wcag2' | 'wcag21';
	export type AxeDevToolsAPI = typeof axe & {
		init: (ruleset: Ruleset, resolve?: Resolve, reject?: Reject) => void;
		ruleSets: RulesetsReponse[];
		setTrackingUrl: (url: string) => void;
		setDistinctId: (id: string) => void;
		enableTracking: (state: boolean) => void;
	};
	export type RulesetsReponse = {
		id: Ruleset;
		defn: any;
	};
	const AxeDevTools: AxeDevToolsAPI;
	export const analytics: Analytics;
	export default AxeDevTools;
}
