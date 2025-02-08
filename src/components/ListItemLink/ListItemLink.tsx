import React from 'react'
import cx from 'classnames'
import classes from './ListItemLink.module.css'
import type { LinkBaseProps } from './ListItemLink.types'
import type { AuxiliaryProps } from '@/utils/utils.types'

export const ListItemLink = <C extends React.ElementType>({
  component,
  icon,
  children,
  className,
  ...restProps
}: AuxiliaryProps<C, LinkBaseProps>) => {
  const Component = component || 'a'

  return (
    <Component className={cx(classes.root, className)} {...restProps}>
      {icon ? (
        <span className={classes.iconRoot}>
          {icon}
        </span>
      ) : null}
      <span className={classes.label}>{children}</span>
    </Component>
  )
}
