import React from 'react'
import { useState } from 'react'
import { Chip } from './Chip'

export const Simple: React.FC<{}> = () => {
  return <Chip>This Month</Chip>
}

export const Selectable: React.FC<{}> = () => {
  const [state, setstate] = useState('')
  return (
    <>
      {['This Month', 'Last Month', 'Last 3 Months', 'Last 6 Months'].map(item => (
        <Chip clickable onClick={() => setstate(item)} active={item === state} label={item} style={{ margin: '0px 4px' }} key={item} />
      ))}
    </>
  )
}

export default {
  title: 'Chip',
  component: Chip
}
