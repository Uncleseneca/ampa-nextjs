# @ampa/nextjs

![Page transitions](https://media.giphy.com/media/4TvtsH44oz39uEnEKf/giphy.gif)

Сreate page transitions with nextjs router without pain

Allows to create route-based animations (different animations for different routes)

## Install

```sh
yarn add @ampa/nextjs
```

## Usage

To start animating pages you need to do 2 things (there is an example below):

- make animations config with CSS transitions
- wrap your page component with `<Ampa />`

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

### 2) `<Ampa />`

```
import { Ampa } from '@ampa/nextjs'
...
  <Ampa
    timeout={{ enter: 500, exit: 500 }}
    routeAnimations={routeAnimations}
  >
    <Component {...pageProps} />
  </Ampa>
```

## Example

Available in [example](./example)
