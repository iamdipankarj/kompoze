import React from 'react'
import { useState } from 'react'
import { Tab } from '@/components/Tab'
import { TabHeader } from '@/components/TabHeader'
import { TabPanel } from '@/components/TabPanel'

export const Simple: React.FC<{}> = () => {
  const [value, setValue] = useState(0)

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const tabStyles: React.CSSProperties = {
    padding: 10,
    border: '1px solid #666',
    fontSize: 14,
    margin: 2,
    borderRadius: 4
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
      <TabPanel hidden={value !== 0}>
        <div style={tabStyles}>Tab 1 Content</div>
      </TabPanel>
      <TabPanel hidden={value !== 1}>
        <div style={tabStyles}>Tab 2 Content</div>
      </TabPanel>
      <TabPanel hidden={value !== 2}>
        <div style={tabStyles}>Tab 3 Content</div>
      </TabPanel>
    </div>
  )
}

export default {
  title: 'Tab Example',
  component: Simple
}
