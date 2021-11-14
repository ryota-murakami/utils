import fs from 'fs'
import os from 'os'

export function writeJson(fileName, object) {
  if (Array.isArray(object)) {
    const obj = { [fileName]: object }
    fs.writeFileSync(
      fileName + '.json',
      JSON.stringify(obj, null, 2).replace(/\n/g, os.EOL) + os.EOL
    )
    return
  }

  RegExp.prototype.toJSON = RegExp.prototype.toString
  fs.writeFileSync(
    fileName + '.json',
    JSON.stringify(object, null, 2).replace(/\n/g, os.EOL) + os.EOL
  )
}
