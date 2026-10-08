import * as z from 'zod'

const Player = z.object({
  username: z.string(),
  xp: z.number(),
})

const result = Player.safeParse({ username: 42, xp: '100' })

console.log('result', result)

if (!result.success) {
  // Zod 4 keeps `error` behind a getter, so log it directly
  console.log('error', result.error)
  console.log('issues', result.error.issues)
  console.log('flatten', z.flattenError(result.error))
} else {
  console.log('data', result.data)
}

const ok = Player.safeParse({ username: 'raphtalia', xp: 100 })

console.log('ok', ok)

if (ok.success) {
  console.log('ok data', ok.data)
}
