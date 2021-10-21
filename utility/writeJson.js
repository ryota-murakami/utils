import fs from 'fs'
import os from 'os'

export function writeJson(fileName, object) {
  RegExp.prototype.toJSON = RegExp.prototype.toString
  fs.writeFileSync(
    fileName,
    JSON.stringify(object, null, 2).replace(/\n/g, os.EOL) + os.EOL
  )
}
