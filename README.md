# @ampa/core

## Why?

To create page transitions with any router without pain

Allows to create route-based animations (different animations for different route combinations)

## Install

```sh
yarn add @ampa/core
```

## Usage

To start annimating pages you need to do 2 things (there is an example below):

- make animations config with CSS transitions
- wrap your route components with `<PageTransition />` and use suitable plugin (like [@ampa/nextjs-router](https://github.com/Uncleseneca/ampa-nextjs))

## Example:

### 1) config

We use express-like routes and classNames list from react-transition group

```
const routeAnimations = [
  {
    prevRoute: '/home',
    nextRoute: '/career/:id',
    styles: {
      enter: 'my-enter',
      enterActive: 'my-active-enter',
      exit: 'my-exit',
      exitActive: 'my-active-exit',
    },
  },

  // or if you're using CSS-modules you can import whole CSS file, where classes named like 'enter', 'enterActive' etc
  {
    prevRoute: '/about',
    nextRoute: '/home',
    styles: backwardsCSSfile,
  },
]
```

### 2) `<PageTransition />`

```
import { PageTransition } from '@ampa/core' // the core component
import { createUseNextRouter } from '@ampa/nextjs-router' // one of the plugins for different routers
...
  <PageTransition
    useRouter={createUseNextRouter()}
    timeout={{ enter: 900, exit: 900 }}
    routeAnimations={routeAnimations}
  >
    <Component {...pageProps} />
  </PageTransition>
```

## Other examples

Available in [examples](./examples)

## Requirements

### React 16.8 and higher

## Router plugins

To use page transitions with every router you need a suitable plugin

[@ampa/nextjs-router](https://github.com/Uncleseneca/ampa-nextjs-router) is currently available for nextjs users
