class Player {
    constructor(username, totalLvl, cbtLvl){
        this.username = username;
        this.totalLvl = totalLvl;
        this.cbtLvl = cbtLvl;
    }
}

class Clan {
    constructor(clanName, membersAmount, clanOwner, clanUserName, clanUserTotalLvl, clanUserCbtLvl){
        this.clanName = clanName;
        this.membersAmount = membersAmount;
        this.clanOwner = clanOwner;
        this.player = new Player(clanUserName, clanUserTotalLvl, clanUserCbtLvl);
    }
}

let dinastiarune = new Clan("Solaria", 247, "Nana sz", "Yotyan", 2858, 138);
console.log(dinastiarune);


class Captain {
    constructor(name, age, flightHours) {
        this.name = name;
        this.age = age;
        this.flightHours = flightHours;
    }
}

class Spaceship {
    constructor(spaceshipName, spaceshipCrewQtt, captainName, captainAge, captainFlightHours) {
        this.spaceshipName = spaceshipName;
        this.spaceshipCrewQtt = spaceshipCrewQtt;
        this.captain = new Captain(captainName, captainAge, captainFlightHours);
    }
}

let nhemon = new Spaceship("Nhemon", 1234, "Nhemon da Silva", 456, 2000000);
console.log(nhemon);