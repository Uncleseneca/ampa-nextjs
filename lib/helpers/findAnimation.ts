import { RouteAnimationMapped } from '../types/RouteAnimationMapped'

export const findAnimation = (
  mappedAnimations: RouteAnimationMapped[],
  prevRoute: string,
  nextRoute: string,
) =>
  mappedAnimations.find(({ prevRouteRegExp, nextRouteRegExp }) => {
    return prevRouteRegExp.test(prevRoute) && nextRouteRegExp.test(nextRoute)
  })
