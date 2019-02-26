# @ampa/nextjs-router

## Plugin for [@ampa/core](https://github.com/Uncleseneca/ampa-core) to use with nextjs-router

## Install

```sh
yarn add @ampa/nextjs-router
```

## Example

```
import { PageTransition } from '@ampa/core' // the core component
import { createUseNextRouter } from '@ampa/nextjs-router' // one of the hooks for different routers
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
