import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import FacebookBorderRadius from './FacebookBorderRadius'

export default {
  title: 'Style/FacebookBorderRadius',
  component: FacebookBorderRadius,
} as ComponentMeta<typeof FacebookBorderRadius>

export const Template: ComponentStory<typeof FacebookBorderRadius> = (args) => (
  <FacebookBorderRadius {...args} />
)
