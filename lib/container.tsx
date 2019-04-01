import { isEmpty } from 'lodash'
import Router from 'next/router'
import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { pickAnimation } from './helpers/pickAnimation'
import { AnimationStyles } from './types/AnimationStyles'
import { RouteAnimationRaw } from './types/RouteAnimationRaw'

interface Timeout {
  enter: number
  exit: number
}

interface Props {
  timeout: Timeout
  routeAnimations: RouteAnimationRaw[]
  children: React.ReactNode
}

interface State {
  animationStyles: AnimationStyles
}

export class Ampa extends React.Component<Props, State> {
  public static defaultProps = {
    timeout: {
      enter: 500,
      exit: 500,
    },
  }
  public state = {
    animationStyles: {},
  }
  public pickAnimation = pickAnimation(this.props.routeAnimations)

  public componentDidMount() {
    Router.events.on('routeChangeStart', this.onRouteChangeStart)
  }

  public componentWillUnmount() {
    Router.events.off('routeChangeStart', this.onRouteChangeStart)
  }

  public render() {
    const { timeout, children } = this.props
    const { animationStyles } = this.state

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
          <CSSTransition
            key={typeof window !== 'undefined' ? Router.asPath : 'cant'}
            timeout={isEmpty(animationStyles) ? { enter: 0, exit: 0 } : timeout}
            classNames={animationStyles}
          >
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
  private onRouteChangeStart = (nextRoute: string) => {
    const prevRoute = Router.asPath || ''
    const newAnimation = this.pickAnimation(prevRoute, nextRoute)

    this.setState({
      animationStyles: newAnimation,
    })
  }
}
