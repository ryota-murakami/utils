const parse = require('style-to-object')
console.log(
  parse(
'fill: currentcolor; transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;'
  )
)
