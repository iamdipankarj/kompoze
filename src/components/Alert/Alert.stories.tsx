import React from 'react'
import { Alert } from './Alert'

export const Success: React.FC<{}> = () => {
  return (
    <Alert variant='success'>
      Alert Content
    </Alert>
  )
}

export const WithError: React.FC<{}> = () => {
  return (
    <Alert variant='error'>
      Alert Content
    </Alert>
  )
}

export default {
  title: 'Alert',
  component: Alert
}
