import fs from 'fs'
import { getDateFromString, matchStatus } from './utils'


export abstract class CsvReaderClass<T>{
    abstract typifyTheInput(data:string[][]):T[] 

    //protected Data : T[] = []

    // constructor(){}

    readCsvFile(): string[][] {
        const data = fs.readFileSync('football.csv',{
            encoding: 'utf-8'
        }).split('\n').map(item=> item.split(','))
        return data;
    }
        
            
           
}


