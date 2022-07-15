let clanptbr = ["Solaria", "The Outlander", "PURGATORIO", "Rom Rom Purr", "Hard 2 Beat"];

//antes do splice
console.log(clanptbr); 

let splicedClan = clanptbr.splice(3, 4, "Atlantis", "Winx Club");

//depois do splice
console.log(clanptbr); 

//mostra os clãs que foram substituídos
console.log(splicedClan); 

//=======================================
let clans = ['Level IIIs', 'Nexicans', 'Last Moments', 'Zer0 PvM', 'Goblin SlayerZ'];

//antes do slice
console.log(clans);

let slicedClan = clans.slice(0, 2);

//depois do slice
console.log(clans);

//mostra os clãs que não foram removidos pelo slice
console.log(slicedClan);



