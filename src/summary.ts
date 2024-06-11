import { matchType } from "./MatchType";

export interface Analyser{
  run(matches: matchType[]):string
}
export interface OutputTarget{
  print(report:string):void
}

export class Summary{
    constructor(public Analyser: Analyser, public OutputTarget: OutputTarget){}

    buildAndPrintReport(matches:matchType[]){
        const result = this.Analyser.run(matches);
        this.OutputTarget.print(result)
    }

}