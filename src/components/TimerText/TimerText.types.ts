import React from 'react'

export type ITimeFormat = 'hh:mm:ss' | 'mm:ss'

export interface TimerTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** (long) Unix timestamp for the endtime */
  endTime: number
  /** format either (hh:mm:ss, mm:ss) */
  format?: ITimeFormat
  /** Callback fires when timer is finished  */
  onFinish?: () => void
}
