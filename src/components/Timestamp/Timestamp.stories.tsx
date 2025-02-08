import React from 'react'
import { Timestamp } from './Timestamp'

export const Simple: React.FC<{}> = () => {
  return (
    <Timestamp>
      18 Jan 2020
    </Timestamp>
  )
}

export default {
  title: 'Timestamp',
  component: Timestamp
}
