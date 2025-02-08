import React from 'react'
import cx from 'classnames'
import classes from './SearchBar.module.css'
import type { SearchBarProps } from './SearchBar.types'

export const SearchBar: React.FC<SearchBarProps> = props => {
  const {
    inputRef,
    placeholder = 'Search or Add...',
    inputProps,
    startAdornment = null,
    endAdornment = null,
    onChange,
    className,
    classList = {},
    ...restProps
  } = props
  const { input, container } = classList as any

  return (
    <div
      className={cx(classes.root, className)}
      {...restProps}
    >
      {startAdornment}
      <div className={cx(classes.container, container)}>
        <input
          ref={inputRef}
          className={cx(classes.input, input)}
          onChange={onChange}
          placeholder={placeholder}
          {...inputProps}
        />
      </div>
      {endAdornment}
    </div>
  )
}
