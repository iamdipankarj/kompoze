import React from 'react'
import { Radio } from './Radio'

export const Simple: React.FC<{}> = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Radio
        id='check_1'
        name='actor'
      >
        Michael Scott
      </Radio>
      <br />
      <Radio
        id='check_2'
        name='actor'
      >
        Dwight Schrute
      </Radio>
      <br />
      <Radio
        id='check_3'
        name='actor'
      >
        Jim Halpert
      </Radio>
      <br />
      <Radio
        id='check_4'
        name='actor'
      >
        <div>Some Content</div>
      </Radio>
    </div>
  )
}

export default {
  title: 'Radio',
  component: Radio
}
