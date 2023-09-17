export function parseCode(maybeCodeString) {
  return Function('"use strict";return (' + maybeCodeString + ')')()
}

export function stringifyObject(objectOrArray) {
  const string = JSON.stringify(objectOrArray, null, 2)

  return string.replace(/  "([^"]+)":/g, '  $1:')
}
