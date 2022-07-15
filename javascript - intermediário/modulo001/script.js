//let minhaLista = [];
//let minhaLista = new Array();

class player {
    //atributo(s)

    //construtor 
    constructor(name, hitpoints, totalLvl, isIronman = false, isHCIM = false) {
        this.name = name;
        this.totalLvl = totalLvl;
        this.isIronman = isIronman;
        this.isHCIM = isHCIM;
        this.hitpoints = 9900;
    }

    //método(s)
    isPoisoned(poisonDmg) {
        this.hitpoints -= poisonDmg;
    }
}

let yotyan = new player("Yotyan", 2858);
console.log(yotyan);

yotyan.isPoisoned(230);
console.log(yotyan);

yotyan.isPoisoned(245);
console.log(yotyan);


