import React from 'react'
import { useState } from 'react'
import { TransactionInput } from './TransactionInput'

export const SimpleUncontrolled: React.FC<{}> = () => {
  return (
    <TransactionInput
      onChangeValue={(value: any) => {
        console.log(value)
      }}
    />
  )
}

export const Controlled: React.FC<{}> = () => {
  const [value, setValue] = useState<any>(2034)
  return (
    <TransactionInput
      value={value}
      onChangeValue={(val: any) => {
        setValue(val)
      }}
    />
  )
}

export const WithError: React.FC<{}> = () => {
  return (
    <TransactionInput
      error
      helperText='Invalid Amount'
      onChangeValue={console.log}
    />
  )
}

export default {
  title: 'TransactionInput',
  component: TransactionInput
}
