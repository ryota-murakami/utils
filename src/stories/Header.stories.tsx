import type { Meta } from '@storybook/react'
import React from 'react'

import { Header } from './Header'

export default {
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  title: 'Example/Header',
} as Meta<typeof Header>

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut = {
  args: {},
}
