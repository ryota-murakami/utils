module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic', useSpread: true }],
    [
      '@babel/preset-typescript',
      { allExtensions: true, isTSX: true, allowNamespaces: true },
    ],
  ],
}
