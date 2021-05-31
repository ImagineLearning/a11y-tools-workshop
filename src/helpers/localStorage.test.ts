import { readFromLocalStorage, writeToLocalStorage } from './localStorage';

describe('local storage helpers', () => {
	let getItem: (key: string) => string;
	let setItem: (key: string, value: string) => void;

	beforeEach(() => {
		({ getItem, setItem } = Storage.prototype);
		Storage.prototype.getItem = jest.fn();
		Storage.prototype.setItem = jest.fn();
	});

	afterEach(() => {
		Storage.prototype.getItem = getItem;
		Storage.prototype.setItem = setItem;
	});

	describe('writeToLocalStorage(..)', () => {
		it('serializes value before storing', () => {
			writeToLocalStorage('key', { foo: 'bar', baz: 1 });
			expect(window.localStorage.setItem).toHaveBeenCalledWith('key', '{"foo":"bar","baz":1}');
		});
	});

	describe('readFromLocalStorage(..)', () => {
		it('deserializes value from local storage', () => {
			(window.localStorage.getItem as jest.Mock).mockImplementation(() => '{"foo":"bar","baz":1}');
			const value = readFromLocalStorage('key');
			expect(value).toEqual({ foo: 'bar', baz: 1 });
		});

		it('returns default value if none in local storage', () => {
			(window.localStorage.getItem as jest.Mock).mockImplementation(() => undefined);
			const value = readFromLocalStorage('key', ['foo', 'bar']);
			expect(value).toEqual(['foo', 'bar']);
		});
	});
});
