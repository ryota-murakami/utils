import z from 'zod'

const schema = z
  .object({
    nameList: z.array(z.string()),
    age: z.number(),
  })
  .nullish()

console.log(schema.safeParse({}))
