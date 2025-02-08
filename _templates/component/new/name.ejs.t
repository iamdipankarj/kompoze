---
to: src/components/<%= name %>/<%= name %>.tsx
---

import React from 'react'
import cx from 'classnames'
import { <%= name %>Props } from './<%= name %>.types'
import classes from './<%= name %>.module.css'

export const <%= name %>: React.FC<<%= name %>Props> = props => {
  const {
    className,
    ...restProps
  } = props

  return (
    <div
      className={cx(classes.root, className)}
      {...restProps}
    >
      Hello <%= name %>
    </div>
  )
}
