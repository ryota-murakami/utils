import type { Meta } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },

  component: Button,

  title: 'Example/Button',
} as Meta<typeof Button>

export const Primary = {
  args: {
    label: 'Button',
    primary: true,
  },
}

export const Secondary = {
  args: {
    label: 'Button',
  },
}

export const Large = {
  args: {
    label: 'Button',
    size: 'large',
  },
}

export const Small = {
  args: {
    label: 'Button',
    size: 'small',
  },
}
