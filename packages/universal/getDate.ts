export function getDate(): 'YYYY-MM-DD' {
  return new Date().toISOString().split('T')[0] as 'YYYY-MM-DD'
}
