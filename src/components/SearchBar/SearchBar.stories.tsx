import React from 'react'
import { Avatar } from '@/components/Avatar'
import { HamburgerIcon } from '@/components/Icon'
import { IconButton } from '@/components/IconButton'
import { SearchBar } from '@/components/SearchBar'

export const Simple: React.FC<{}> = () => {
  return (
    <SearchBar
      startAdornment={(
        <IconButton>
          <HamburgerIcon
            fill='#000'
            size={24}
          />
        </IconButton>
      )}
      endAdornment={(
        <Avatar src='https://randomuser.me/api/portraits/men/60.jpg' />
      )}
      placeholder='Type here...'
      onChange={e => {
        console.log(e.target.value)
      }}
    />
  )
}

export default {
  title: 'SearchBar',
  component: SearchBar
}
