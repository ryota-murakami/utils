import z from 'zod'

const schema = z
  .object({
    nameList: z.array(z.string()),
    age: z.number(),
  })
  .nullish()
const data = schema.safeParse({namelist: null, age: null})

console.log(data)