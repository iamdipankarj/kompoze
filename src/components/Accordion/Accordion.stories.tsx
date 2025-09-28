import React from 'react'
import { useState } from 'react'
import { Accordion } from './Accordion'
import { InfoIcon, ProfileFilledIcon } from '@/components/Icon'
import { ListView } from '@/components/ListView'
import { ListItem } from '@/components/ListItem'

export const Uncontrolled: React.FC<{}> = () => {
  return (
    <div>
      <Accordion
        startIcon={<InfoIcon size={24} />}
        label='Document Checklist'
      >
        <ListView gutter>
          <ListItem secondary='Credits' />
          <ListItem secondary='Account Statement' />
        </ListView>
      </Accordion>
      <Accordion startIcon={<ProfileFilledIcon size={24} />} label='Security & Privacy Policy'>
        <span style={{ padding: 10, display: 'block' }}>How we protect your personal and financial information.</span>
      </Accordion>
      <Accordion
        classList={{
          childrenClass: 'mySpecialClass'
        }}
        startIcon={<InfoIcon size={24} />}
        label='Interest Rates & Fees'
      >
        <span style={{ padding: 10, display: 'block' }}>Understand how our loan interest rates and fees work.</span>
      </Accordion>
    </div>
  )
}

export const Controlled: React.FC<{}> = () => {
  const [selected, setSelected] = useState<string | null>(null)

  const handleClick = (panel: string) => (_e: any) => {
    setSelected(panel === selected ? null : panel)
  }

  return (
    <div>
      <Accordion
        onClick={handleClick('panel1')}
        expanded={selected === 'panel1'}
        startIcon={<InfoIcon size={24} />}
        label='Frequently Asked Questions'
      >
        <ListView gutter>
          <ListItem secondary='Credits' />
          <ListItem secondary='Account Statement' />
        </ListView>
      </Accordion>
      <Accordion
        onClick={handleClick('panel2')}
        expanded={selected === 'panel2'}
        startIcon={<ProfileFilledIcon size={24} />}
        label='Customer'
      >
        <span style={{ padding: 10, display: 'block' }}>Customer Content</span>
      </Accordion>
      <Accordion
        onClick={handleClick('panel3')}
        expanded={selected === 'panel3'}
        startIcon={<InfoIcon size={24} />}
        label='Transactions'
      >
        <span style={{ padding: 10, display: 'block' }}>Transactions Content</span>
      </Accordion>
    </div>
  )
}

export default {
  title: 'Accordion',
  component: Accordion
}
