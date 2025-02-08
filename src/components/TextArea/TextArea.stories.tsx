import React from 'react'
import { InfoIcon } from '../Icon'
import { TextArea } from './TextArea'

export const WithError: React.FC<{}> = () => {
  return (
    <TextArea placeholder='Name' helperText='Helper Text' error />
  )
}

export const StartAdornment: React.FC<{}> = () => {
  return (
    <TextArea
      startAdornment={<InfoIcon fill='green' size={24} />}
      endAdornment={<InfoIcon fill='green' size={24} />}
      placeholder='Name'
      helperText='Helper Text'
    />
  )
}

export default {
  title: 'TextArea',
  component: TextArea
}
