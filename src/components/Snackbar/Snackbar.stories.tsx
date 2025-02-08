import React from 'react'
import { Snackbar } from './Snackbar'
import { ShieldIcon } from '../Icon/ShieldIcon'
import { Button } from '../Button'

export const Simple: React.FC<{}> = () => {
  return (
    <Snackbar
      action={(
        <Button
          size='small'
          variant='text'
          color='primary'
          onClick={() => console.log('you clicked me!')}
        >
          RETRY
        </Button>
      )}
    >
      Snack Message
    </Snackbar>
  )
}

export const WithAdornment: React.FC<{}> = () => {
  const handleClose = (e: any, reason: any) => {
    console.log(e)
    console.log(reason)
  }

  return (
    <Snackbar
      startAdornment={<ShieldIcon fill='green' size={24} />}
      action={(
        <Button
          size='small'
          variant='text'
          color='primary'
          onClick={() => console.log('you clicked me!')}
        >
          RETRY
        </Button>
      )}
      onExit={handleClose}
    >
      Snack Message
    </Snackbar>
  )
}

export default {
  title: 'Snackbar',
  component: Snackbar
}
