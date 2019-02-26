import * as pathToRegExp from 'path-to-regexp'

export interface AnimationStyles {
  exit: string
  exitActive: string
  enter: string
  enterActive: string
}

export interface AnimationData {
  animationStyles: AnimationStyles
  key: string
}

export interface RouteAnimationRaw {
  prevRoute: string
  nextRoute: string
  styles: AnimationStyles
}
interface RouteAnimationMapped {
  prevRouteRegExp: RegExp
  nextRouteRegExp: RegExp
  styles: AnimationStyles
}

export const dummy = {
  exit: '',
  exitActive: '',
  enter: '',
  enterActive: '',
}

const mapAnimations = (routeAnimations: RouteAnimationRaw[]) =>
  routeAnimations.map(({ prevRoute, nextRoute, styles }) => ({
    prevRouteRegExp: pathToRegExp(prevRoute),
    nextRouteRegExp: pathToRegExp(nextRoute),
    styles,
  }))

const findAnimation = (
  mappedAnimations: RouteAnimationMapped[],
  prevRoute: string,
  nextRoute: string,
) =>
  mappedAnimations.find(({ prevRouteRegExp, nextRouteRegExp }) => {
    return prevRouteRegExp.test(prevRoute) && nextRouteRegExp.test(nextRoute)
  })

export const pickAnimation = (routeAnimations: RouteAnimationRaw[]) => {
  const mappedAnimations = mapAnimations(routeAnimations)

  return (prevRoute: string, nextRoute: string) => {
    const animation = findAnimation(mappedAnimations, prevRoute, nextRoute)

    return animation ? animation.styles : dummy
  }
}
