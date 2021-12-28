module.exports = {
  "stories": [
    "../react/**/*.stories.mdx",
    "../react/**/*.stories.@(js|jsx|ts|tsx)"
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
