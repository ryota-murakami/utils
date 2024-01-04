import type { Meta, StoryObj } from '@storybook/react'

import { Spacer } from './Spacer'

const meta: Meta<typeof Spacer> = {
  title: 'components/Spacer',
  component: Spacer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ border: '2px solid black', width: '50%' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Spacer>

export const md: Story = {
  args: {
    size: 'md',
  },
}

export const lg: Story = {
  args: {
    size: 'lg',
  },
}

export const sm: Story = {
  args: {
    size: 'sm',
  },
}

export const xs: Story = {
  args: {
    size: 'xs',
  },
}
