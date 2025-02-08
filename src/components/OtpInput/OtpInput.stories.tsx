import React from 'react'
import { OtpInput } from './OtpInput'

export const Simple: React.FC<{}> = () => {
  return (
    <div style={{ width: 250 }}>
      <OtpInput
        autoFocus
        isNumberInput
        onOTPChange={(otp: string) => {
          console.log(otp)
        }}
        length={6}
      />
    </div>
  )
}

export const WithError: React.FC<{}> = () => {
  return (
    <div style={{ width: 250 }}>
      <OtpInput
        autoFocus
        isNumberInput
        onOTPChange={(otp: string) => {
          console.log(otp)
        }}
        length={6}
        error
      />
    </div>
  )
}

export default {
  title: 'OtpInput',
  component: OtpInput
}
