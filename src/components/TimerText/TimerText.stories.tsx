import React from 'react'
import { TimerText } from './TimerText'

const addHours = (hours: number) => {
  return (new Date()).getTime() + (hours * 60 * 60 * 1000)
}

const addMinutes = (minutes: number) => {
  return new Date(new Date().getTime() + minutes * 60000)
}

const addSeconds = (seconds: number) => {
  const d = new Date()
  d.setSeconds(d.getSeconds() + seconds)
  return d
}

export const Simple: React.FC<{}> = () => {
  return (
    <TimerText
      onFinish={() => console.log('Timer Finished')}
      endTime={addSeconds(100).getTime()}
    />
  )
}

export default {
  title: 'TimerText',
  component: TimerText
}
