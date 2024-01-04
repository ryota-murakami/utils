---
to: <%= path %>/<%= Name %>/<%= Name %>.stories.tsx
---
<%
  const Name = h.changeCase.pascal(name)
  const Path = path.replace('_components/', '')
%>
import { Meta, StoryObj } from '@storybook/react'
import { <%= Name %> } from './<%= Name %>'

export default {
  title: '<%= Path %>/<%= Name %>',
  component: <%= Name %>,
  tags: ['autodocs'],
} satisfies Meta<typeof <%= Name %>>

type Story = StoryObj<typeof <%= Name %>>

export const Default: Story = {
  args: {},
}
