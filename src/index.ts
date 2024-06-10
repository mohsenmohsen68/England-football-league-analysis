import data from "./getDataFromCsv";
console.log('ma data',data);

let manUtdWins = 0;
for(let match of data){
    if( match[1]==='Man United' && match[5] === 'H' ){
        manUtdWins++;
    }
    if( match[2]==='Man United' && match[5] === 'A' ){
        manUtdWins++;
    }
}
console.log(`manchester united has won ${manUtdWins} games`)
