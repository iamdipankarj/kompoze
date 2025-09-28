import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'

const meta = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/60.jpg'
  }
}

export const WithInitials: Story = {
  args: {
    alt: 'MJ',
    size: 40
  }
}

export const AsChildren: Story = {
  args: {
    children: 'OK',
    size: 40
  }
}

export const WithSize: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/men/60.jpg',
    size: 20
  }
}
