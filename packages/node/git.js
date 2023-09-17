const exec = require('child_process')

/**
 * executes a git subcommand
 * @param {any} args
 */
export async function git(args) {
  return new Promise((resolve, reject) => {
    exec(`git ${args}`, (err, stdout) => {
      if (err) {
        reject(err)
      } else {
        resolve(stdout.trim())
      }
    })
  })
}
