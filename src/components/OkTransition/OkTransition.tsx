import React from 'react'
import { cloneElement, isValidElement, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import type { OkTransitionProps } from './OkTransition.types'
import classes from './OkTransition.module.css'

export const OkTransition: React.FC<OkTransitionProps> = props => {
  const {
    children,
    anchor = 'fade',
    show = false,
    unmountOnExit = true,
    ...restProps
  } = props
  const nodeRef = useRef(null)

  return (
    <CSSTransition
      mountOnEnter
      in={show}
      timeout={300}
      classNames={{
        enter: classes[`${anchor}Enter`],
        enterActive: classes[`${anchor}EnterActive`],
        exit: classes[`${anchor}Exit`],
        exitActive: classes[`${anchor}ExitActive`]
      }}
      unmountOnExit={unmountOnExit}
      nodeRef={nodeRef}
      {...restProps}
    >
      {isValidElement(children) && cloneElement(children as React.ReactElement<any>, {
        ref: nodeRef
      })}
    </CSSTransition>
  )
}
