
import { ConsoleReport } from "./consoleReport";
import { MatchReader } from "./matchReader";
import { Summary } from "./summary";
import { WinsAnalysis } from "./winsAnalysis";

const myMatchDataObj = new MatchReader('football.csv');
const data = myMatchDataObj.readCsvFile()
const myTypifiedMatches = myMatchDataObj.typifyTheInput(data)

const reportNumberOne = new Summary(new WinsAnalysis('Liverpool'), new ConsoleReport())

reportNumberOne.buildAndPrintReport(myTypifiedMatches)


