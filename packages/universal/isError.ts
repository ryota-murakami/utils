export default function isError(err: unknown): err is Error {
  return (
    typeof err === 'object' && err !== null && 'name' in err && 'message' in err
  )
}
