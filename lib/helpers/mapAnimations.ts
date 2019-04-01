import * as pathToRegExp from 'path-to-regexp'

import { RouteAnimationRaw } from '../types/RouteAnimationRaw'

export const mapAnimations = (routeAnimations: RouteAnimationRaw[]) =>
  routeAnimations.map(({ prevRoute, nextRoute, styles }) => ({
    prevRouteRegExp: pathToRegExp(prevRoute),
    nextRouteRegExp: pathToRegExp(nextRoute),
    styles,
  }))
