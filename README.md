# Accessibility Tools Workshop

This is a simple React application for demonstrating the use of various accessibility testing tools.
The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled with [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss).
It uses [Storybook](https://github.com/storybookjs/storybook) to facilitate building UI components in isolation.

## TL;DR

```sh
git clone https://github.com/ImagineLearning/a11y-tools-workshop.git
cd a11y-tools-workshop
yarn install
yarn start
```

## Prerequisites

The following software/configuration is needed to work with this project.

### Node

This project is built to work with current versions of Node. Using a tool like Node Version Manager (nvm) is recommended. Follow the instructions for installing on your platform:

- [Mac OSX](https://github.com/nvm-sh/nvm#installation-and-update)
- [Windows](https://github.com/coreybutler/nvm-windows/releases)

If you prefer not to use nvm, you can [download the installer](https://nodejs.org/en/download/current/) for your platform from the [Node website](https://nodejs.org)

### Yarn

This project uses [Yarn](https://classic.yarnpkg.com/lang/en/) for managing dependencies.
If you do not have have Yarn installed on your system, follow the [installation instructions on the Yarn website](https://classic.yarnpkg.com/en/docs/install).

Alternatively, you can use npm for managing dependencies.

### GitHub Package Registry

This workshop will make use of packages hosted through [GitHub Package Registry (GPR)](https://github.com/features/packages).
Currently, [GPR requires an access token](https://github.community/t/download-from-github-package-registry-without-authentication/14407)
even if the package is publicly available.
Be sure you've properly [configured Yarn with your personal access token](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages) to avoid issues installing packages.

## Getting Started

### Install dependencies

Install the project dependencies by running the following command in the project directory:

```sh
yarn install
```

### Run application

Start the development server by running the following command in the project directory:

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Run Storybook

Start the Storybook development server by running the following command in the project directory:

```sh
yarn storybook
```

Open [http://localhost:6006](http://loalhost:6006) to view it in the browser.

The page will reload if you make edits.

### Run unit tests

Launches the test runner in the interactive watch mode by running the following command in the project directory:

```sh
yarn test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more from the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) and [Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction).
