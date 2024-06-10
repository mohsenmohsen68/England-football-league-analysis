import fs from 'fs'
import { getDateFromString, matchStatus } from './utils'

type matchType = [Date, string, string, number, number, matchStatus, string]

const data = fs.readFileSync('football.csv',{
    encoding: 'utf-8'
}).split('\n').map(item=> item.split(','))
.map((match:string[]): matchType => {
    return [
      getDateFromString(match[0]),
      match[1],
      match[2],
      parseInt(match[3]),
      parseInt(match[4]),
      match[5] as matchStatus,
      match[6]
    ]
} )

export default data