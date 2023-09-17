import type { Meta, StoryObj } from '@storybook/react'

import RefCompareApp from './RefCompereApp'

const meta: Meta<typeof RefCompareApp> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RefCompareApp',
  component: RefCompareApp,
}

export default meta
type Story = StoryObj<typeof RefCompareApp>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <RefCompareApp />,
}
