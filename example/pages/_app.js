import React from 'react'
import App, { Container } from 'next/app'
import { Ampa } from '../../dist'

import backwards from './animations/backwards.css'
import forwards from './animations/forwards.css'

const routeAnimations = [
  {
    prevRoute: '/index',
    nextRoute: '/second',
    styles: forwards,
  },
  {
    prevRoute: '/second',
    nextRoute: '/index',
    styles: backwards,
  },
]

class MyApp extends App {
  static async getInitialProps() {
    return {}
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Ampa
          timeout={{ enter: 500, exit: 500 }}
          routeAnimations={routeAnimations}
        >
          <Component {...pageProps} />
        </Ampa>
      </Container>
    )
  }
}

export default MyApp
