import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta = {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {}
}

export const WithSize: Story = {
  args: {
    size: 20
  }
}

export const WithStrokeWidth: Story = {
  args: {
    size: 80,
    strokeWidth: 2
  }
}

export const WithCustomDuration: Story = {
  args: {
    size: 80,
    color: 'tomato',
    strokeWidth: 2
  }
}
