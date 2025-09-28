import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from './Button'
import { InfoFilledIcon } from '@/components/Icon'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    color: 'primary',
    children: 'Button'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    children: 'Button',
    disabled: true
  }
}

export const Grayscale: Story = {
  args: {
    size: 'medium',
    color: 'grayscale',
    variant: 'filled',
    children: 'Grayscale Button'
  }
}

export const LeftIcon: Story = {
  args: {
    startIcon: (<InfoFilledIcon size={24} fill='#fff' />),
    size: 'medium',
    color: 'primary',
    variant: 'filled',
    children: 'With Left Icon'
  }
}

export const Vertical: Story = {
  args: {
    startIcon: (<InfoFilledIcon size={24} />),
    size: 'medium',
    color: 'default',
    variant: 'outlined',
    borderRadius: 4,
    children: 'With Top Icon',
    vertical: true
  }
}

export const RightIcon: Story = {
  args: {
    endIcon: (<InfoFilledIcon size={24} fill='#fff' />),
    size: 'medium',
    color: 'primary',
    variant: 'filled',
    children: 'With Right Icon'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    color: 'primary',
    variant: 'filled',
    children: 'Small Button'
  }
}

export const WithRef: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    color: 'primary',
    children: 'Focus me (ref)',
  },
  render: (args) => {
    const ref = React.useRef<HTMLButtonElement>(null)

    React.useEffect(() => {
      console.log('Button ref:', ref.current)
      ref.current?.focus()
    }, [])

    return <Button {...args} ref={ref} />
  },
}

export const AnchorWithRef: Story = {
  args: {
    component: 'a',
    href: '#',
    variant: 'outlined',
    color: 'primary',
    children: 'Anchor with ref',
  },
  render: (args) => {
    const ref = React.useRef<HTMLAnchorElement>(null)

    return <Button {...args} ref={ref} />
  },
}

