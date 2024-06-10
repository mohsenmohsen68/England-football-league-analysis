export function getDateFromString(stringDate:string):Date{
    let dateArray = stringDate.split('/')
    return new Date(parseInt(dateArray[2]) , parseInt(dateArray[1]), parseInt(dateArray[0]));
}

export enum matchStatus {
    homeWins = 'H',
    awayWins = 'A',
    Draw = 'D',

}