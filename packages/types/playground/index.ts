import { z } from 'zod'

const stringToLength = z.string().pipe(z.transform((val) => val.length))

const res = stringToLength.safeParse(4)

console.log(res)
