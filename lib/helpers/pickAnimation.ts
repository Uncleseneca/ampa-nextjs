import { RouteAnimationRaw } from '../types/RouteAnimationRaw'
import { findAnimation } from './findAnimation'
import { mapAnimations } from './mapAnimations'

export const pickAnimation = (routeAnimations: RouteAnimationRaw[]) => {
  const mappedAnimations = mapAnimations(routeAnimations)

  return (prevRoute: string, nextRoute: string) => {
    const animation = findAnimation(mappedAnimations, prevRoute, nextRoute)

    return animation ? animation.styles : {}
  }
}
