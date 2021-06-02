# Accessibility Testing and Tools

## Why and What?

Discussion lead by Mina Kianrad on why we need to think about accessibility in our applications and what are some of the common places we fall short.

## How?

Workshop on using tools to identify accessibility issues early through linting and testing.

Includes hands on exercises with [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y),
[jest-axe](https://github.com/nickcolley/jest-axe),
[@storybook/addon-a11y](https://github.com/storybookjs/storybook/tree/next/addons/a11y),
[cypress-axe](https://github.com/component-driven/cypress-axe),
and [@axe-core/react](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md).

### Axe accessibility engine

Axe is an accessibility testing engine for websites and other HTML-based user interfaces.
It's fast, secure, lightweight, and was built to seamlessly integrate with any existing test environment so you can automate accessibility testing alongside your regular functional testing.

> With axe-core, you can find **on average 57% of WCAG issues automatically.**

#### The Axe Manifesto

- Axe is open source.
- It returns zero false positives (bugs notwithstanding).
- It's designed to work on all modern browsers and with whatever tools, frameworks, libraries and environments you use today.
- It's actively supported by [Deque Systems](https://www.deque.com), a major accessibility vendor.
- It integrates with your existing functional/acceptance automated tests.
- It automatically determines which rules to run based on the evaluation context.
- Axe supports in-memory fixtures, static fixtures, integration tests and iframes of infinite depth.
- Axe is highly configurable.

### eslint-plugin-jsx-a11y

ESLint is a tool that statically analyzes your code to quickly find problems.
ESLint is built into most text editors, providing realtime feedback as you write your code.
Because JSX allows your markup to live inside your JavaScript/TypeScript files,
the jsx-a11y plugin can analyze your React components' markup for accessibility issues and provide feedback _before you ever run your code_.

#### Installation and configuration

Install the `eslint-plugin-jsx-a11y` package.

```sh
yarn add -D eslint-plugin-jsx-a11y
```

Add to the `eslintConfig` section of the `package.json` file (or in a `.eslintrc` file).

```jsonc
// package.json

{
	// ...
	"eslintConfig": {
		"extends": ["react-app", "react-app/jest", "plugin:jsx-a11y/recommended"]
		// ...
	}
}
```

#### Running ESLint

Add script to `package.json` for running ESLint.

```jsonc
// package.json

{
	// ...
	"scripts": {
		// ...
		"lint": "eslint src/**/*.{js,jsx,ts,tsx}"
	}
}
```

Run linter.

```sh
yarn lint
```

#### Fixing issues

**SearchBox.tsx**\
Change `<span>` to `<button>` element.

```diff
-	<span
-		className={classNames('flex-shrink self-center pl-2 pr-1 cursor-pointer', {
+	<button
+		className={classNames('flex-shrink pl-2 pr-1', {
			invisible: !value,
		})}
		type="button"
		onClick={handleClickReset}
	>
		<FontAwesomeIcon icon={faTimes} />
-	</span>
+	</button>
```

**BaseTab.tsx**\
Change `<div>` to `<button>` element.

```diff
-	<div
+	<button
		className={classNames(
-			'BaseTab inline-block px-5 pt-1 pb-1 rounded-t-md border border-gray-300 cursor-pointer',
+			'BaseTab inline-block px-5 pt-1 pb-1 rounded-t-md border border-gray-300',
			{
				selected,
			},
			className
		)}
		onClick={handleClick}
	>
		<span
			className={classNames('pb-1 border-b-4', {
				'border-blue-500': selected,
				'border-transparent': !selected,
			})}
		>
			{children}
		</span>
-	</div>
+	</button>
```

### jest-axe

Jest is a JavaScript testing framework most commonly used with developing React applications.
The `jest-axe` package provides custom Jest matchers that use axe-core for testing accessibility.
This allows you write unit tests render components using `@testing-library/react` and check for accessibility violations.

#### Installation and configuration

Install the `jest-axe` package and its associated types.

```sh
yarn add -D jest-axe @types/jest-axe
```

Add custom matchers to Jest in the `setupTests.ts` file (adds the `toHaveNoViolations` function to `expect`).

```ts
// setupTests.ts

// ...
import 'jest-axe/extend-expect';
```

#### Adding tests

**SearchBox.test.tsx**

```tsx
// ...

it('has no a11y violations', async () => {
	const { container } = render(<SearchBox initialValue="Hello world!" />);
	const results = await axe(container);
	expect(results).toHaveNoViolations();
});
```

#### Fixing issues

**SearchBox.tsx**\
Add discernable text to image buttons.

```diff
	<button
		className={classNames('flex-shrink pl-2 pr-1', {
			invisible: !value,
		})}
		type="button"
		onClick={handleClickReset}
+		aria-label="Clear search"
	>
		<FontAwesomeIcon icon={faTimes} />
	</button>
-	<button className="flex-shrink pl-1 pr-2 rounded-r-md" type="submit">
+	<button
+		className="flex-shrink pl-1 pr-2 rounded-r-md"
+		type="submit"
+		aria-label="Submit search"
+	>
		<FontAwesomeIcon icon={faSearch} />
	</button>
```

Add label to text input. We _could_ use `aria-label` here, but [it's better to use semantic HTML](https://www.w3.org/TR/using-aria/#rule1) whenever possible.

```diff
export interface SearchBoxProps {
	className?: string;
	initialValue?: string;
+	label?: string;
	placeholder?: string;
	onReset?(): void;
	onSubmit?(text: string): void;
}
```

```diff
-	<input
-		className="flex-grow px-2 py-1 rounded-l-md"
-		type="text"
-		placeholder={placeholder}
-		value={value}
-		onChange={handleChange}
-	/>
+	<label>
+		<span className="sr-only">{label}</span>
+		<input
+			className="flex-grow px-2 py-1 rounded-l-md"
+			type="text"
+			placeholder={placeholder}
+			value={value}
+			onChange={handleChange}
+		/>
+	</label>
```

**SearchBox.test.tsx**\
Fix test. Note that tests are less fragile since they no longer rely on knowing DOM structure.

```diff
-	const { getByPlaceholderText } = render(
-		<SearchBox placeholder="Search..." onReset={handleReset} />
+	const { getByLabelText } = render(
+		<SearchBox label="Search" placeholder="Search..." onReset={handleReset} />
	);

-	const input = getByPlaceholderText('Search...');
+	const input = getByLabelText('Search');
	userEvent.type(input, 'This is my search');

-	const resetButton = input.nextElementSibling;
+	const resetButton = getByLabelText('Clear search');
	userEvent.click(resetButton!);
```

### @imaginelearning/test-storybook-a11y

Writing accessibility tests for every component can get tedious.
You need to write tests to render each component in all its possible states then check the accessibility.

Storybook is an open source tool for building UI components and pages in isolation.
Using Storybook to develop your components can help keep components small, stateless, and easy to test.
Storybook stories allow you to render components in different states by specifying different props for each story.
These stories can be leveraged for testing as well.

**SearchBox.test.tsx**\
Leverage the "Search Box \ Default" story to write a test.

```tsx
import { Default } from './SearchBox.stories';

// ...

it('with no initial text has no a11y violations', async () => {
	const { container } = render(<Default {...Default.args} />);
	const results = await axe(container);
	expect(results).toHaveNoViolations();
});
```

Using the `@imaginelearning/test-storybook-a11y` you can automatically run accessibility tests on all your Storybook stories.

#### Installation and configuration

Install the `@imaginelearning/test-storybook-a11y` package from GitHub Package Registry.

```sh
yarn add -D @imaginelearning/test-storybook-a11y
```

Create a new test file: `a11y.test.ts`. You can call it whatever you want, but be sure it uses the same suffix as your other tests.

**a11y.test.ts**\
Import the default function and call it with a glob pattern that will identify all of your story files.

```ts
import testStorybookA11y from '@imaginelearning/test-storybook-a11y';

testStorybookA11y('./**/*.stories.@(jsx|tsx)');
```

#### Fixing issues

**ContactCard.tsx**\
Add discernable text to buttons.

```diff
	<Button
		className="text-sm text-gray-400 hover:text-blue-600 focus:text-blue-600"
		buttonType="clear"
		onClick={onClickEdit}
	>
		<FontAwesomeIcon icon={faEdit} />
+		<span className="sr-only">Edit Contact</span>
	</Button>
	<Button
		className="text-sm text-gray-400 hover:text-red-700 focus:text-red-700"
		buttonType="clear"
		onClick={onClickDelete}
	>
		<FontAwesomeIcon icon={faTrash} />
+		<span className="sr-only">Delete Contact</span>
	</Button>
```

**FormControl.tsx**\
Add label to input.

```diff
-	<div className={className}>
-		{label && <strong className={classNames('block text-sm', labelClassName)}>{label}</strong>}
+	<label className={classNames('block', className)}>
+		{label && (
+			<strong
+				className={classNames(
+					'block text-sm',
+					{ 'sr-only': !label && !!placeholder },
+					labelClassName
+				)}
+			>
+				{label ?? placeholder}
+			</strong>
+		)}
		<TextInput
			className={inputClasses}
			name={name}
			placeholder={placeholder}
			type={type}
			value={value}
			onBlur={onBlur}
			onChange={onChange}
		/>
		{error && <p className="mt-1 text-red-700">{error}</p>}
-	</div>
+	</label>
```

**TextInput.stories.tsx**\
Because the `TextInput` component is just a wrapper around the `input` or `textarea` element,
it's not necessarily an accessibility concern that the component in isolation does not have a label.

This particular issue could be fixed by creating a decorator for the `TextInput` stories that wraps the component in a `label` element.
However, simply adding placeholder text to the story will also fix the issue.

```diff
export const SingleLineWithValue = Template.bind({});
SingleLineWithValue.args = {
+	...SingleLine.args,
	value: 'Text entered.',
};
```

### @storybook/addon-a11y

Accessibility testing with `jest-axe` is fast and convenient, but Jest uses [`jsdom`](https://github.com/jsdom/jsdom) by default and doesn't render styles.
So `jest-axe` will help identify structural accessibility issues, but won't necessarily capture visual issues such as color contrast.

The `@storybook/addon-a11y` addon for Storybook will run axe-core accessibility tests on your stories in your browser.
A complete report is displayed in the "Accessibility" tab of the Storybook UI.

#### Installation and configuration

Install the `@storybook/addon-a11y` package.

```sh
yarn add -D @storybook/addon-a11y
```

Register the addon in the Storybook configuration file (`.storybook/main.js`).

```diff
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-create-react-app',
+		'@storybook/addon-a11y',
	],
```

### Cypress and cypress-axe

Cypress is test runner for creating end-to-end tests that run in your browser.
The `cypress-axe` package is an extension to Cypress that adds commands for injecting `axe-core` into your application and running accessibility tests on the content.

#### Installation and configuration

Install the `cypress-axe` package.

```sh
yarn add -D cypress-axe
```

Include the `cypress-axe` commands in `.cypress/support/index.ts`.

```diff
import './commands';
+import 'cypress-axe';
```

#### Adding tests

**app.test.ts**\
Add tests for different states. Note that we have to call `cy.injectAxe()` _after_ calling `cy.visit('/')`.

```ts
it('contact list has no a11y violations', () => {
	localStorage.setItem(
		'contacts',
		JSON.stringify([
			{
				id: 1,
				firstName: 'Bob',
				lastName: 'Bobertson',
				email: 'bob@example.com',
				phone: '555-555-5555',
				address: '1234 Street\nAnytown, USA',
			},
		])
	);

	cy.visit('/');
	cy.injectAxe();

	cy.checkA11y();
});

it('add contact form has no a11y violations', () => {
	cy.visit('/');
	cy.injectAxe();

	cy.get('header svg[data-icon="plus"]').click();

	cy.checkA11y();
});
```

#### Fixing issues

**Missing button names: `App.tsx`**\
Add missing button names using the `sr-only` class.

```diff
	<Button buttonType="default" onClick={handleClickAddContact}>
		<FontAwesomeIcon icon={faPlus} />
+		<span className="sr-only">Add Contact</span>
	</Button>
```

```diff
	<Tab className="font-bold" value="search">
		<FontAwesomeIcon icon={faSearch} />
+		<span className="sr-only">Search Results</span>
	</Tab>
```

**Color contrast: `Button.tsx`**\
Adjust background color for "Primary" button type.

```diff
	const classes = classNames(
		'px-4 py-1 rounded-md',
		{
			'border-2': buttonType !== 'clear',
			'border-gray-300 bg-gray-100': buttonType === 'default',
-			'border-blue-600 bg-blue-500 text-white': buttonType === 'primary',
+			'border-blue-500 bg-blue-600 text-white': buttonType === 'primary',
			'border-gray-400 bg-gray-300': buttonType === 'secondary',
			'border-green-500 bg-green-600 text-white': buttonType === 'success',
			'border-red-500 bg-red-600 text-white': buttonType === 'alert',
			'border-yellow-400 bg-yellow-300': buttonType === 'warning',
		},
		className
	);
```

**Dialog must have an accessible name**\
Expose `aria` prop from `ReactModal` in `Modal` component, then use the `aria-labelledby` attribute.

**Modal.tsx**\
Expose `aria` prop.

```diff
export type ModalProps = Pick<
	ReactModal.Props,
-	'ariaHideApp' | 'className' | 'isOpen' | 'onRequestClose'
+	'aria' | 'ariaHideApp' | 'className' | 'isOpen' | 'onRequestClose'
>;

export default function Modal({
+	aria,
	ariaHideApp = true,
	children,
	className,
	isOpen,
	label,
	onRequestClose,
}: PropsWithChildren<ModalProps>) {
	return (
		<ReactModal
+			aria={aria}
			ariaHideApp={ariaHideApp}
```

**EditContactModal.tsx**\
Set `aria-labelledby` attribute.

```diff
	return (
		<Modal
+			aria={{ labelledby: 'add-edit-contact-heading' }}
			className={className}
			isOpen={isOpen}
			ariaHideApp={ariaHideApp}
			onRequestClose={onCancel}
		>
-			<h1 className="mb-4 font-bold text-xl">{`${initialValues ? 'Edit' : 'Add'} Contact`}</h1>
+			<h1 id="add-edit-contact-heading" className="mb-4 font-bold text-xl">{`${
+				initialValues ? 'Edit' : 'Add'
+			} Contact`}</h1>
			<EditContact initialValues={initialValues} onCancel={onCancel} onSubmit={onSubmit} />
		</Modal>
```

**Page must have one main landmark: `cypress/integration/app.test.ts`**\
The `react-modal` package renders the modal using a React Portal, which is appended to the `body` element.
This makes it very difficult to wrap the modal content inside the application's `main` landmark.
The `ReactModal` component adheres to all the WCAG recommendations for modal dialogs though,
so we can bypass this particular error by providing a custom selector for the accessibility check to limit it to the modal content. ¯\\\_(ツ)\_/¯

```diff
	it('add contact form has no a11y violations', () => {
		cy.visit('/');
		cy.injectAxe();

		cy.get('header svg[data-icon="plus"]').click();

-		cy.checkA11y();
+		// Limit to just the modal to avoid `landmark-one-main` error
+		cy.checkA11y('.ReactModalPortal');
	});
```

### @axe-core/react

The `@axe-core/react` package integrates with React to run accessibility tests with axe-core after each update.
Results are output to the Chrome DevTools console.

#### Installation and configuration

Install the `@axe-core/react` package.

```sh
yarn add @axe-core/react
```

Lazy load axe-core in non-production builds in `index.tsx`.

```tsx
if (process.env.NODE_ENV !== 'production') {
	import('@axe-core/react').then(({ default: axe }) => {
		axe(React, ReactDOM, 1000);
	});
}
```
