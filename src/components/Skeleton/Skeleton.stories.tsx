import React from 'react'
import type { Meta } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

export const Rectangle: React.FC<{}> = () => {
  return (
    <>
      <Skeleton type='rectangle' width={150} height={40} borderRadius={50} />
      <br />
      <Skeleton type='rectangle' width={300} height={30} borderRadius={5} />
      <br />
      <Skeleton type='rectangle' width={400} height={40} borderRadius={10} />
      <br />
      <Skeleton type='rectangle' width={550} height={60} borderRadius={5} />
    </>
  )
}

export const Circle: React.FC<{}> = () => {
  return (
    <>
      <Skeleton type='circle' size={70} />
      <br />
      <Skeleton type='circle' size={100} />
      <br />
      <Skeleton type='circle' size={150} />
      <br />
    </>
  )
}

export default {
  title: 'Skeleton',
  component: Skeleton
} as Meta
