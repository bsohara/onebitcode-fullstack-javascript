class NPC {
    constructor(name, type, isPacific){
        this.name = name;
        this.type = type;
        this.isPacific = true;
    }
    
    walk(){
        console.log("Andando.");
    }
}

class Farmer extends NPC {
    harvest(){
        console.log("Colhendo batatas.");
    }
}

let billy = new Farmer("Billy", "Humano", true);
console.log(billy);

let goblins = new NPC("Goblins", "Monstro", false);
console.log(goblins);