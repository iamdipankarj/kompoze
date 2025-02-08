import React from 'react'
import { useState } from 'react'
import { TabPanel } from './TabPanel'
import { TabHeader } from '../TabHeader'
import { Tab } from '../Tab'

export const Simple: React.FC<{}> = () => {
  const [value, setValue] = useState(0)

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div>
      <TabHeader
        value={value}
        onChange={handleChange}
        aria-label='Material Tab Example'
      >
        <Tab value={0} label='React' />
        <Tab value={1} label='Vue JS' />
        <Tab value={2} label='Svelte' />
      </TabHeader>
      <TabPanel hidden={value !== 0}>Tab 1 Content</TabPanel>
      <TabPanel hidden={value !== 1}>Tab 2 Content</TabPanel>
      <TabPanel hidden={value !== 2}>Tab 3 Content</TabPanel>
    </div>
  )
}

export default {
  title: 'Tab Example',
  component: Simple
}
