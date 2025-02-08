import React from 'react'
import { Typography } from './Typography'

export const Simple: React.FC<{}> = () => {
  return (
    <>
      <Typography variant='h1' align='center'>
        H1
      </Typography>
      <Typography variant='h2' align='right'>
        H2
      </Typography>
      <Typography variant='h2' align='left'>
        H3
      </Typography>
      <Typography variant='h4' align='center' gutterBottom>
        H4
      </Typography>
      <Typography variant='h5' align='center' gutterBottom>
        H5
      </Typography>
      <Typography variant='h6' align='center' gutterBottom>
        H6
      </Typography>
      <Typography variant='subtitle1' align='center'>
        Subtitle 1
      </Typography>
      <Typography variant='subtitle2' align='center'>
        Subtitle 2
      </Typography>
      <Typography variant='subtitle3' align='center'>
        Subtitle 3
      </Typography>
      <Typography variant='subtitle4' align='center'>
        Subtitle 4
      </Typography>
      <Typography variant='body1' align='center'>
        Body 1
      </Typography>
      <Typography variant='body2' align='center'>
        Body 2
      </Typography>
      <Typography component='p' variant='button1' align='center'>
        Button 1
      </Typography>
      <Typography component='p' variant='button2' align='center'>
        Button 2
      </Typography>
      <Typography component='p' variant='caption1' align='center'>
        Caption 1
      </Typography>
      <Typography component='p' variant='caption2' align='center'>
        Caption 2
      </Typography>
    </>
  )
}

export default {
  title: 'Typography',
  component: Typography
}
