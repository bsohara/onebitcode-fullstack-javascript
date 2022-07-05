let player = new Object();

console.log(player);
console.log(player.name);

player.isOnlineNow = false;
player["greaterSkillLvl"] = "Invention";

console.log(player["isOnlineNow"]);
console.log(player.greaterSkillLvl);