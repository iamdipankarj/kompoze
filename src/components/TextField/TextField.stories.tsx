import React from 'react'
import { useState } from 'react'
import { TextField } from './TextField'
import { InfoIcon } from '../Icon'

export const Simple: React.FC<{}> = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <TextField
      label='Name'
      value={value}
      onChange={handleChange}
    />
  )
}

export const Disabled: React.FC<{}> = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <TextField
      label='Name'
      value={value}
      onChange={handleChange}
      disabled
    />
  )
}

export const WithHelperText: React.FC<{}> = () => {
  return (
    <TextField placeholder='Name' helperText='Helper Text' />
  )
}

export const WithError: React.FC<{}> = () => {
  return (
    <TextField
      label='Name'
      helperText='Helper Text'
      error
    />
  )
}

export const StartAdornment: React.FC<{}> = () => {
  return (
    <TextField
      startAdornment={<InfoIcon fill='green' size={24} />}
      label='Name'
      helperText='Helper Text'
    />
  )
}

export const EndAdornment: React.FC<{}> = () => {
  return (
    <TextField
      startAdornment={<InfoIcon fill='green' size={24} />}
      endAdornment={<InfoIcon size={24} />}
      placeholder='Name'
      helperText='Helper Text'
    />
  )
}

export default {
  title: 'TextField',
  component: TextField
}
