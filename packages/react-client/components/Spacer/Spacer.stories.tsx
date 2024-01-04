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

export const _4xs: Story = {
  args: {
    size: '4xs',
  },
}

export const _3xs: Story = {
  args: {
    size: '3xs',
  },
}

export const _2xs: Story = {
  args: {
    size: '2xs',
  },
}
export const xs: Story = {
  args: {
    size: 'xs',
  },
}
export const sm: Story = {
  args: {
    size: 'sm',
  },
}

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

export const xl: Story = {
  args: {
    size: 'xl',
  },
}

export const _2xl: Story = {
  args: {
    size: '2xl',
  },
}

export const _3xl: Story = {
  args: {
    size: '3xl',
  },
}

export const _4xl: Story = {
  args: {
    size: '4xl',
  },
}
