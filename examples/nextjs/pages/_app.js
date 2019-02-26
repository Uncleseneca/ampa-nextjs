import React from 'react';
import App, { Container } from 'next/app';
import { PageTransition } from '@ampa/core';
import { createUseNextRouter } from '@ampa/nextjs-router';

import backwards from './animations/backwards.css';
import forwards from './animations/forwards.css';

const routeAnimations = [
  {
    prevRoute: '/index',
    nextRoute: '/second',
    styles: forwards
  },
  {
    prevRoute: '/second',
    nextRoute: '/index',
    styles: backwards
  }
];

class MyApp extends App {
  static async getInitialProps() {
    return {};
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PageTransition
          useRouter={createUseNextRouter()}
          timeout={{ enter: 500, exit: 500 }}
          routeAnimations={routeAnimations}
        >
          <Component {...pageProps} />
        </PageTransition>
      </Container>
    );
  }
}

export default MyApp;
