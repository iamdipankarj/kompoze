import React from 'react'
import { useState } from 'react'
import { ChipSelect } from './ChipSelect'
import classes from './ChipSelect.stories.module.css'

export const Checkbox: React.FC<{}> = () => {
  return (
    <div className={classes.root}>
      <ChipSelect
        id='chip_1'
        label='This Month'
      />
      <ChipSelect
        id='chip_2'
        label='This Week'
      />
      <ChipSelect
        id='chip_3'
        label='This Year'
      />
    </div>
  )
}

export const Radio: React.FC<{}> = () => {
  const [selected, setSelected] = useState('This Month')

  const handleChange = (value: string) => () => {
    setSelected(value)
  }

  return (
    <>
      <div className={classes.selected}>Selected Value: {selected}</div>
      <div className={classes.root}>
        <ChipSelect
          id='radio_1'
          type='radio'
          onChange={handleChange('This Month')}
          name='foo'
          label='This Month'
          checked={selected === 'This Month'}
        />
        <ChipSelect
          id='radio_2'
          type='radio'
          onChange={handleChange('This Week')}
          name='foo'
          label='This Week'
          checked={selected === 'This Week'}
        />
        <ChipSelect
          id='radio_3'
          type='radio'
          name='foo'
          onChange={handleChange('This Year')}
          label='This Year'
          checked={selected === 'This Year'}
        />
        <ChipSelect
          id='radio_4'
          type='radio'
          name='zorg'
          onChange={handleChange('This Disabled')}
          label='Disabled'
          checked={selected === 'This Disabled'}
          disabled
        />
        <ChipSelect
          id='radio_5'
          type='radio'
          name='bar'
          onChange={handleChange('This Disabled Checked')}
          label='Disabled Checked'
          checked
          disabled
        />
      </div>
    </>
  )
}

export default {
  title: 'ChipSelect',
  component: ChipSelect
}
