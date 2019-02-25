import * as Router from 'next/router'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import {
  AnimationStyles,
  dummy,
  pickAnimation,
  RouteAnimationRaw,
} from './pickAnimation'

export interface AnimationData {
  animationStyles: AnimationStyles
  key: string
}
export const createUseNextRouter = () => (
  routeAnimations: RouteAnimationRaw[],
) => {
  const [animationStyles, setAnimationStyles] = useState(dummy)
  const [routes, setRoutes] = useState({
    prevRoute: Router.asPath || '',
    nextRoute: '',
  })

  const pickAnimationCurried = useMemo(() => pickAnimation(routeAnimations), [
    routeAnimations,
  ])

  const onRouteChangeStart = (nextRoute: string) => {
    setRoutes({ prevRoute: Router.asPath || '', nextRoute })
  }

  useLayoutEffect(() => {
    const { prevRoute, nextRoute } = routes

    const newAnimation = pickAnimationCurried(prevRoute, nextRoute)
    setAnimationStyles(newAnimation)
  }, [routes.nextRoute, routes.prevRoute])

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart)
    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart)
    }
  }, [])

  return { animationStyles, key: Router.asPath || '' }
}
