import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Spacer } from './Spacer'

const meta = {
  title: 'Components/Spacer',
  component: Spacer,
} satisfies Meta<typeof Spacer>

export default meta

// const Template: StoryObj<{ size: '4xs' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' }> = (args) => <Spacer {...args} />;
type Story = StoryObj<typeof meta>

export const Size4XS: Story = {
  args: {
    size: '4xs',
  },
}
