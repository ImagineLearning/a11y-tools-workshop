import mountWithStyles from '../../testUtils/mountWithStyles';
import SearchBox from './SearchBox';

describe('SearchBox Cypress', () => {
	it('has no a11y violations', () => {
		mountWithStyles(<SearchBox placeholder="Search..." />);
		cy.axeAnalyze({});
		cy.isAxeClean();
	});
});
