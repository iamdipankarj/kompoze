import React, { useState } from 'react'
import * as IconList from './index'
import { TextField } from '../TextField'
import classes from './Icon.stories.module.css'

const getFilteredList = (icons: Array<any>, search: string) => {
  return icons.filter(name => name.toLowerCase().includes(search.toLowerCase()))
}

export const Collection: React.FC<{}> = () => {
  const [query, setQuery] = useState('')

  const icons = getFilteredList(Object.keys(IconList), query).map((icon, index: number) => {
    return (
      <div key={index} className={classes.iconWrapper}>
        <span className={classes.tooltip}>{icon}</span>
        {React.cloneElement(IconList[icon], { ref: null, size: 24 })}
      </div>
    )
  })
  return (
    <div>
      <TextField
        className={classes.search}
        placeholder='Search...'
        onChange={e => {
          setQuery(e.target.value)
        }}
      />
      <div className={classes.root}>
        {icons}
      </div>
    </div>
  )
}

export const IndividualIcon: React.FC<{}> = () => {
  return (
    <IconList.InfoIcon size={25} />
  )
}

export const ThumbsUpIcon: React.FC<{}> = () => {
  return (
    <IconList.ThumbsDownIcon fill='tomato' size={25} />
  )
}

export default {
  title: 'Icons',
  component: [Collection, IndividualIcon]
}
