import { AnimationStyles } from './AnimationStyles'

export interface RouteAnimationMapped {
  prevRouteRegExp: RegExp
  nextRouteRegExp: RegExp
  styles: AnimationStyles
}
