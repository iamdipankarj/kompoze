---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react'
import { <%= name %> } from './<%= name %>'

export const Simple: React.FC<{}> = () => {
  return (
    <<%= name %> />
  )
}

export default {
  title: '<%= name %>',
  component: <%= name %>
}
