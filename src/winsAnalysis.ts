import { matchType } from "./MatchType";
import { Analyser } from "./summary";
import { matchStatus } from "./utils";

export class WinsAnalysis implements Analyser {
  constructor(public teamName: string) {}

  run(matches: matchType[]): string {
    let Wins = 0;
    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === matchStatus.homeWins) {
        Wins++;
      }
      if (match[2] === this.teamName && match[5] === matchStatus.awayWins) {
        Wins++;
      }
    }

    return `${this.teamName} has won ${Wins} games`;
  }
}
