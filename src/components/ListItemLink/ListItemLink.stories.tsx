import React from 'react'
import { InfoIcon } from '@/components/Icon'
import { ListItemLink } from '@/components/ListItemLink'

export const Simple: React.FC<{}> = () => {
  return (
    <ListItemLink icon={<InfoIcon size={24} fill='green' />} href='#'>
      Add Customer
    </ListItemLink>
  )
}

export default {
  title: 'ListItemLink',
  component: ListItemLink,
  argTypes: {
    component: {
      description: 'React.ElementType',
      table: {
        type: {
          summary: '<Component />',
          detail: 'This is the component element type that will be rendered as is. \nIt can be strings like "a", "span", ReactRouter.Link etc'
        }
      },
      control: {
        type: null
      }
    }
  }
}
