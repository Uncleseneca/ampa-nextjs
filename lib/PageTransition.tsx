import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { RouteAnimationRaw, AnimationData } from './pickAnimation'

interface Timeout {
  enter: number
  exit: number
}

interface Props {
  timeout: Timeout
  className?: string
  routeAnimations: RouteAnimationRaw[]
  children: React.ReactNode
  useRouter: (routeAnimations: RouteAnimationRaw[]) => AnimationData
}

export const PageTransition = ({
  timeout,
  children,
  routeAnimations,
  useRouter,
}: Props) => {
  const { animationStyles, key } = useRouter(routeAnimations)

  return (
    <div
      className="react-page-transition-outer"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <TransitionGroup component={null}>
        <CSSTransition key={key} timeout={timeout} classNames={animationStyles}>
          <div
            className="react-page-transition-inner"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '0',
              left: '0',
            }}
          >
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
