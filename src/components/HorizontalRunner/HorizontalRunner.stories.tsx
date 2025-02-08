import React from 'react'
import { useState } from 'react'
import { HorizontalRunner } from './HorizontalRunner'
import { Chip } from '../Chip'

export const Simple: React.FC<{}> = () => {
  const [active, setActive] = useState('')
  return (
    <HorizontalRunner distance={150}>
      {[
         "Cloud Computing",
         "Machine Learning",
         "Quantum Encryption",
         "Blockchain Ledger",
         "Cyber Security",
         "Data Mining",
         "Edge Computing",
         "Neural Network",
         "Virtual Reality",
         "Augmented Analytics"
      ].map(item => {
        return (
          <Chip
            onClick={() => setActive(item)}
            active={item === active}
            clickable
            label={<span>{item}</span>}
            style={{ margin: '0px 4px' }}
            key={item}
          />
        )
      })}
    </HorizontalRunner>
  )
}

export default {
  title: 'HorizontalRunner',
  component: HorizontalRunner
}
