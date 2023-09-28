# Egis website

Below you'll find instruction on setting up the project locally and how to run a production build.

## Getting started

### Environment variables

The project needs certain environment variables to run.

Copy the `.env.sample` file to `.env.local` in the root directory of the project.

Values can be found in LastPass under Shared-Egis > egis-service-site-gen .env.local

### Node version

Make sure you are using the correct Node version set in the `.nvmrc` file.

It's recommended to use [nvm](https://github.com/nvm-sh/nvm) to easily switch node version in the terminal.

Once you have `nvm`, installed you can run `nvm use` in the project root to switch the the correct node version (specified in `.nvmrc`).

If you need to install that specific version of node, you can do so with `nvm install <node-version>`. e.g. `nvm install 14.17.3`

### Install dependencies:

```
npm install
```

### Running the development site

```
npm run dev
```

### Running tests

Once:

```
npm run test
```

### Production

To create a production build for deployment run:

```
npm run build
```

This can then be started using the command:

```
npm run start
```

## Code style

The codebase uses Prettier for formatting code. Rules defined in `.prettierrc`.

ESLint rules are defined in `.eslintrc.json` for linting TypeScript/JavaScript files.

Stylelint rules are defined in `.stylelintrc.json` for stylesheets.

It is recommended to auto-format on save and have Prettier, ESLint and Stylelint extensions installed in your IDE.

## Deployment

https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/deploy/azure-rm-web-app-deployment?view=azure-devops
