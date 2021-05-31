export function writeToLocalStorage<T>(key: string, value: T) {
	window.localStorage.setItem(key, JSON.stringify(value));
}

export function readFromLocalStorage<T>(key: string, defaultValue?: T) {
	const value = window.localStorage.getItem(key);
	return value ? (JSON.parse(value) as T) : defaultValue;
}
