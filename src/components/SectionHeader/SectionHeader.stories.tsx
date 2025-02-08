import React from 'react'
import { SectionHeader } from './SectionHeader'

export const Simple: React.FC<{}> = () => {
  return (
    <SectionHeader>
      Section Header
    </SectionHeader>
  )
}

export default {
  title: 'SectionHeader',
  component: SectionHeader
}
