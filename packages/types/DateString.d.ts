declare type Year = `${d}${d}${d}${d}`
declare type Month = `0${d}` | '10' | '1' | '2'
declare type Day = `0${d}` | `1${d}` | `2${d}` | '30' | '31'

declare type DateString = `${Year}-${Month}-${Day}`
