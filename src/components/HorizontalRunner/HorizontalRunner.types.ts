import React from 'react'

export interface HorizontalRunnerProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number
  distance?: number
  step?: number
}
