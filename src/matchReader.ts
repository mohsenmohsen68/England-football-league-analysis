import { CsvReaderClass } from "./csvReaderClass";
import { matchStatus } from "./utils";
import { getDateFromString } from "./utils";
import { matchType } from "./MatchType";

export class MatchReader extends CsvReaderClass<matchType> {

    constructor(public filename: string){
        super()
    }
    typifyTheInput(data:string[][]):matchType[] {
        const typifiedData = data.map((match:string[]): matchType => {
            return [
              getDateFromString(match[0]),
              match[1],
              match[2],
              parseInt(match[3]),
              parseInt(match[4]),
              match[5] as matchStatus,
              match[6]
            ]} )
        return typifiedData;
    }        
}