import React from 'react'
import { Slider } from './Slider'

const imageStyle = {
  display: 'block',
  width: '100%',
  height: 'auto'
}

export const Simple: React.FC<{}> = () => {
  return (
    <Slider showArrows>
      <div>
        <img style={imageStyle} src='https://picsum.photos/500/300' />
      </div>
      <div>
        <img style={imageStyle} src='https://picsum.photos/500/300' />
      </div>
      <div>
        <img style={imageStyle} src='https://picsum.photos/500/300' />
      </div>
    </Slider>
  )
}

export const AutoTransition: React.FC<{}> = () => {
  return (
    <Slider autoTransition showArrows>
      <div>
        <img style={imageStyle} src='https://picsum.photos/500/300' />
      </div>
      <div>
        <img style={imageStyle} src='https://picsum.photos/500/300' />
      </div>
      <div>
        <img style={imageStyle} src='https://picsum.photos/500/300' />
      </div>
    </Slider>
  )
}

export default {
  title: 'Slider',
  component: Slider
}
