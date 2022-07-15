//let minhaLista = [];
//let minhaLista = new Array();

class player {
    constructor(name, totalLvl, isIronman = false, isHCIM = false) {
        this.name = name;
        this.totalLvl = totalLvl;
        this.isIronman = isIronman;
        this.isHCIM = isHCIM;
    }
}

let yotyan = new player("Yotyan", 2858);
console.log(yotyan);

let jonatas = new player("Jonatas", 2636, true);
console.log(jonatas);