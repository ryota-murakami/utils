const { spawn } = require('node:child_process')
async function exec(command, options) {
  const child = spawn(command, { shell: true, stdio: 'inherit', ...options })
  await new Promise((res, rej) => {
    child.on('exit', (code) => {
      if (code === 0) {
        res()
      } else {
        rej()
      }
    })
  })
}
