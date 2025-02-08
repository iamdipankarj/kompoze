import React from 'react'
import cx from 'classnames'
import classes from './ListView.module.css'
import type { ListViewProps } from './ListView.types'
import type { AuxiliaryProps } from '@/utils/utils.types'

export const ListView = <C extends React.ElementType>({
  component,
  children,
  className,
  gutter = false,
  ...restProps
}: AuxiliaryProps<C, ListViewProps>) => {
  const Component = component || 'ul'

  return (
    <Component
      className={cx(
        classes.root,
        className,
        { [classes.gutter]: gutter }
      )}
      {...restProps}
    >
      {children}
    </Component>
  )
}
