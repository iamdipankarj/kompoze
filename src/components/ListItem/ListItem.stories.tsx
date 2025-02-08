import React from 'react'
import { ListItem } from './ListItem'
import { Avatar } from '../Avatar'
import { ListView } from '../ListView'
import { DoneCircleIcon } from '../Icon'

export const Simple: React.FC<{}> = () => {
  return (
    <ListView>
      <ListItem
        component='a'
        href='#a'
        classList={{
          root: 'myRoot',
          container: 'myContainer',
          content: 'myContent'
        }}
        primary='Email'
        secondary='Enter Your Email ID'
        icon={<Avatar src='https://randomuser.me/api/portraits/men/60.jpg' />}
      />
      <ListItem
        primary='Email'
        secondary='Enter Your Email ID'
        icon={<Avatar src='https://randomuser.me/api/portraits/men/60.jpg' />}
        endAdornment={(
          <DoneCircleIcon size={20} />
        )}
      />
    </ListView>
  )
}

export default {
  title: 'ListItem',
  component: ListItem
}
