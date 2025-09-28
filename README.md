<p align="center">
  <a href="https://dipankarjana.com/" rel="noopener" target="_blank"></a>
</p>
<h1 align="center">Kompoze</h1>

<div align="center">

Dead simple [React](https://reactjs.org/) react component library to build faster and more accessible React applications.

[![node version](https://img.shields.io/badge/node@latest-%3E=14.18.0-green)](https://badge.fury.io/js/npm)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iamdipankarj/kompoze/blob/master/LICENSE)
[![Follow on Twitter](https://img.shields.io/twitter/follow/iamdipankarj?style=social&label=Follow+@iamdipankarj)](https://twitter.com/iamdipankarj)

</div>

## 🚀 Features

- Current Project branch: `master`
- Build Tool: _Vite_ ([https://vite.dev/](https://vite.dev/))
- Both CommonJS and ESM modules are supported.
- Tested with _Vite_, _Astro_, _Remix_ _SSR React App_, _NextJs_, _CRA_.
- Uses PostCSS with CSS Modules ([https://postcss.org/](https://postcss.org/)).

# Note

Version 2.x.x is a major change and may be directly incompatible with your current project configuration.

# Prerequisites

- Npm (Yarn preferably)
- Node >= 20.9.0
- MacOS / Linux / Windows

## Usage

```
yarn install kompoze
```

## Developing for kompoze

```
git clone git@github.com:iamdipankarj/kompoze.git
cd kompoze
yarn install
```

- To start your _storybook_ server

```
yarn start:storybook
```

- To build your project for external use

```
yarn build
```

## Writing Components

- Make sure you have `hygen` installed.
  https://www.hygen.io/docs/quick-start
- Let's say we want to create a `LocationList` component:

```
hygen component new LocationList
```

- The above command will generate the following files

```
src/components/LocationList/index.ts
src/components/LocationList/LocationList.tsx
src/components/LocationList/LocationList.types.ts
src/components/LocationList/LocationList.styles.ts
src/components/LocationList/LocationList.stories.tsx
```

and will inject the references here:

```
src/components/index.ts
```

##### Usage

```
import { Button, Switch, Alert } from 'kompoze'
```

## Contributing

See CONTRIBUTING.md for more details.
