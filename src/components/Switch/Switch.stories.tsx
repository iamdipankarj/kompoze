import { Switch } from './Switch'
import React from 'react'

export const Simple: React.FC<{}> = () => {
  return (
    <Switch
      id='switch_1'
    >
      Add Customer
    </Switch>
  )
}

export const SmallSize: React.FC<{}> = () => {
  return (
    <Switch
      id='switch_2'
      size='small'
    >
      Add Customer
    </Switch>
  )
}

export default {
  title: 'Switch',
  component: Switch
}
