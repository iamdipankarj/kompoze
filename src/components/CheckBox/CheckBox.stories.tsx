import React from 'react'
import { useState, useEffect } from 'react'
import { CheckBox } from './CheckBox'

export const Simple: React.FC<{}> = () => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    console.log(checked)
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <div>
      <CheckBox
        id='check_1'
        onChange={handleChange}
        checked={checked}
      >
        Add People
      </CheckBox>
      <div>
        {checked ? 'checked' : 'not checked'}
      </div>
    </div>
  )
}

export const CustomColor: React.FC<{}> = () => {
  const [checked, setChecked] = useState(true)
  useEffect(() => {
    console.log(checked)
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <CheckBox
      id='check_2'
      onChange={handleChange}
      checked={checked}
    >
      Add People
    </CheckBox>
  )
}

export default {
  title: 'CheckBox',
  component: CheckBox
}
