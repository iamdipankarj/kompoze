import React from 'react'
import cx from 'classnames'
import classes from './ListItem.module.css'
import type { ListItemProps } from './ListItem.types'
import type { AuxiliaryProps } from '@/utils/utils.types'

export const ListItem = <C extends React.ElementType>({
  component,
  icon,
  primary,
  secondary,
  className,
  endAdornment = null,
  classList = {},
  ...restProps
}: AuxiliaryProps<C, ListItemProps>) => {
  const Component = component || 'li'
  const { root, container, content } = classList as any

  return (
    <Component
      className={cx(classes.root, root, className)}
      {...restProps}
    >
      {icon ? (
        <div className={classes.icon}>
          {icon}
        </div>
      ) : null}
      <div className={cx(classes.container, container)}>
        <div className={cx(classes.content, content)}>
          {primary ? (
            <span className={classes.primary}>{primary}</span>
          ) : null}
          <span className={classes.secondary}>{secondary}</span>
        </div>
        {endAdornment !== null ? (
          <div className={classes.endAdornment}>
            {endAdornment}
          </div>
        ) : null}
      </div>
    </Component>
  )
}
