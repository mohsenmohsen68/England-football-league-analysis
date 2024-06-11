import fs from 'fs'
import { getDateFromString, matchStatus } from './utils'

type matchType = [Date, string, string, number, number, matchStatus, string]
export abstract class CsvReaderClass<T>{
    abstract typifyTheInput(data:string[][]):T[] 

    public matchData : T[] = []

    constructor(){}

    readCsvFile(): string[][] {
        const data = fs.readFileSync('football.csv',{
            encoding: 'utf-8'
        }).split('\n').map(item=> item.split(','))
        return data;
    }
        
            
           
}


