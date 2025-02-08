import React, {
  isValidElement,
  cloneElement,
  useState,
  useEffect
} from 'react'
import cx from 'classnames'
import classes from './TabHeader.module.css'
import type { TabHeaderProps } from './TabHeader.types'

export const TabHeader: React.FC<TabHeaderProps> = props => {
  const {
    onChange,
    value = 0,
    children,
    className,
    ...restProps
  } = props
  const [width, setWidth] = useState(0)
  const [offsetLeft, setOffsetLeft] = useState(0)
  const currentTabRef = React.createRef<any>()

  const isTabActive = (childValue: number) => (childValue === value)

  useEffect(() => {
    if (currentTabRef && currentTabRef.current) {
      setWidth(currentTabRef.current.offsetWidth)
      setOffsetLeft(currentTabRef.current.offsetLeft)
    }
  }, [])

  return (
    <div
      className={cx(classes.root, className)}
      {...restProps}
    >
      {React.Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child as any, {
            isActive: isTabActive(child.props.value),
            ref: isTabActive(child.props.value) ? currentTabRef : null,
            onClick: (e: React.SyntheticEvent) => {
              const el = e.currentTarget as HTMLButtonElement
              setWidth(el.offsetWidth || 0)
              setOffsetLeft(el.offsetLeft || 0)
              onChange(e, child.props.value)
            }
          })
        }
        return null
      })}
      <span
        className={classes.highlight}
        style={{
          width,
          transform: `translateX(${offsetLeft}px)`
        }}
      />
    </div>
  )
}
