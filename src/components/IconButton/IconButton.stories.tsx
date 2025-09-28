import React from 'react'
import { useState } from 'react'
import type { Meta } from '@storybook/react-vite'
import { IconButton } from './IconButton'
import { CheckBox } from '@/components/CheckBox'
import { InfoIcon } from '@/components/Icon'

export const Medium: React.FC<{}> = args => {
  const [disabled, setDisabled] = useState(false)

  const handleChange = (e: any) => {
    setDisabled(e.target.checked)
  }

  return (
    <div>
      <CheckBox
        style={{ display: 'block', marginBottom: 20 }}
        id='check_1'
        onChange={handleChange}
      >
        Disabled?
      </CheckBox>
      <IconButton {...args} disabled={disabled}>
        <InfoIcon fill='#212121' size={24} />
      </IconButton>
    </div>
  )
}

export const Primary: React.FC<{}> = () => {
  return (
    <IconButton color='primary' variant='filled'>
      <InfoIcon fill='#212121' size={24} />
    </IconButton>
  )
}

export const Small: React.FC<{}> = () => {
  return (
    <IconButton variant='outlined' size='small' disabled>
      <InfoIcon fill='#212121' size={18} />
    </IconButton>
  )
}

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: { type: 'select' }
    }
  }
} as Meta
