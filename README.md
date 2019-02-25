# @react-page-transition/use-nextjs

## Plugin for [@react-page-transition/core](https://github.com/Uncleseneca/react-page-transition-core) to use with nextjs

## Install

```sh
yarn add @react-page-transition/use-nextjs
```

## Example

```
import { PageTransition } from '@react-page-transition/core' // the core component
import { createUseNextRouter } from '@react-page-transition/use-nextjs' // one of the hooks for different routers
...
  <PageTransition
    useRouter={createUseNextRouter()}
    timeout={{ enter: 900, exit: 900 }}
    routeAnimations={routeAnimations}
  >
    <Component {...pageProps} />
  </PageTransition>
```

## Requirements

### React 16.8 and higher
