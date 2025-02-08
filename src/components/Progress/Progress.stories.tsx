import React from 'react'
import { Progress } from './Progress'

export const Infinite: React.FC<{}> = () => {
  return (
    <Progress />
  )
}

export const Static: React.FC<{}> = () => {
  return (
    <Progress variant='static' percentage={23} />
  )
}

export const StaticCustomHeight: React.FC<{}> = () => {
  return (
    <Progress variant='static' percentage={23} height={5} />
  )
}

export default {
  title: 'Progress',
  component: Progress
}
