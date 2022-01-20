module.exports = {
  "stories": [
    "../packages/react/**/*.stories.mdx",
    "../packages/react/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-dark-mode'
  ],
  "core": {
    "builder": "storybook-builder-vite"
  }
}
