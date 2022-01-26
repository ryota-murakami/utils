module.exports = {
  "stories": [
    "../packages/react/**/*.stories.mdx",
    "../packages/react/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "core": {
    "builder": "webpack5"
  }
}
