import React from 'react'
import { Paper } from './Paper'

export const Simple: React.FC<{}> = () => {
  return (
    <Paper>
      Content
    </Paper>
  )
}

export const Compact: React.FC<{}> = () => {
  return (
    <Paper compact>
      Content
    </Paper>
  )
}

export const Clickable: React.FC<{}> = () => {
  return (
    <Paper clickable>
      Content
    </Paper>
  )
}

export default {
  title: 'Paper',
  component: Paper
}
