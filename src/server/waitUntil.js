// from https://github.com/mui-org/material-ui/tree/20f6450209de399917e40e36468e97d056dc0c1d/modules/waterfall
import sleep from './sleep'

export default async function waitUntil(test, options = {}) {
  const { delay = 5e3, tries = -1 } = options
  const { predicate, result } = await test()

  if (predicate) {
    return result
  }

  if (tries - 1 === 0) {
    throw new Error('tries limit reached')
  }

  await sleep(delay)
  return waitUntil(test, { ...options, tries: tries > 0 ? tries - 1 : tries })
}
