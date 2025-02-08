import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import type { TimerTextProps } from './TimerText.types'

const defaultState = {
  'hh:mm:ss': '00:00:00',
  'mm:ss': '00:00'
}

const formatMap = {
  'hh:mm:ss': {
    hour: '2-digit', second: '2-digit', minute: '2-digit'
  },
  'mm:ss': {
    second: '2-digit', minute: '2-digit'
  }
}

const getTimeObject = (distance: number) => ({
  hours: Math.floor(distance / (1000 * 60 * 60)),
  minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  seconds: Math.floor((distance % (1000 * 60)) / 1000)
})

export const TimerText: React.FC<TimerTextProps> = props => {
  const {
    format = 'mm:ss',
    className,
    onFinish,
    endTime,
    ...restProps
  } = props

  const [result, setResult] = useState<string>(defaultState[format as any])
  const [deltaTime, setDeltaTime] = useState(0)

  const handleChange = useCallback(() => {
    if (onFinish) {
      onFinish()
    }
  }, [deltaTime, onFinish])

  useEffect(() => {
    let interval: any = 0
    if (deltaTime < 0) {
      handleChange()
      return () => clearInterval(interval)
    }
    interval = setInterval(() => {
      const currentTime = new Date().getTime()
      const diffTime = endTime - currentTime
      setDeltaTime(diffTime)
      const data = getTimeObject(diffTime)
      const { hours, minutes, seconds } = data
      const d = new Date()
      d.setHours(hours)
      d.setMinutes(minutes)
      d.setSeconds(seconds)
      setResult(d.toLocaleTimeString([], formatMap[format as any]))
    }, 1000)
    return () => clearInterval(interval)
  }, [deltaTime])

  return (
    <span
      className={className}
      {...restProps}
    >
      {deltaTime > 0 ? result : defaultState[format as any]}
    </span>
  )
}
