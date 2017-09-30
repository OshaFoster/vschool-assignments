var readlineSync = require('readline-sync');

var player = {
	name: "Player",
	hitPoints: 4,
	attackPower: 2,
	inventory: ["Chocolate"],
	//numBattles: 0;
	life: function () {

		if (this.hitPoints === 0) {
			return "and the end of life."
		}

		return "Alive"
	}
};


var enemy = {
	name: "Monster",
	hitPoints: 6,
	attackPower: 2,
	inventory: "sword",
}

function Enemy(name, hitPoints, attackPower, inventory) {
	this.name = name;
	this.hitPoints = hitPoints;
	this.attackPower = attackPower;
	this.inventory = inventory;
}

var enemyGoblin = new Enemy("Goblin", 2, 2, "dagger");
var enemyTroll = new Enemy("Troll", 1, 3, "hammer");
var enemyMan = new Enemy("Man", 1, 2, "bow");

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function walk() {

	var walkChoice = randomInt(1, 3);
    console.log(walkChoice)
	if (walkChoice === 1) {

		console.log("You are walking peacefully through the forest..") 
		
		readlineSync.keyInYN("would you like to coninue walking? ")
		walk()

	} else {

		console.log("You've crossed an enemy, prepare to fight!")
		
		fight()
	} 
}

function fight(){
	
	
	
	var win = randomInt(1, 3) * player.attackPower
	var lose = randomInt(1, 3) * enemy.attackPower
	
	
	if ( win > lose){
		
		player.hitPoints++ 
		console.log(player.hitPoints)
		
		console.log (player.name + " you've won the battle, your enemy is defeated!")
		
	} else {
		
		
			
		player.hitPoints--
		
		console.log (player.name + " you've lost the battle, but you got away!")
		
			console.log(player.hitPoints)
		
			readlineSync.keyInYN("would you like to coninue walking? ")
	
		}
	
	

}




var playerName = ['Glenn', 'Hansel', 'Humle', ]

index = readlineSync.keyInSelect(playerName, "Welcome to the Dale, you are an elf for this adventure, choose the name of your avatar: ")

player.name = playerName[index]


console.log(player.name + " you are the champion of this story lets get on your way! "), 

walk()







while (player.life() === "Alive") {

walk()


}

console.log(player.life())



























































//var player = {
//	name: "Player",
//	hitPoints:4,
//	attackPower:1,
//	inventory: [] ,
//	life: function() {
//		
//		if (this.hitPoints === 0) {
//			return "End of life."
//		}
//		
//		return "Alive"
//	}
//};
//
//
//var enemy = {
//	name: "Monster",
//	hitPoints:6,
//	attackPower:2,
//	inventory: "sword",
//}
//
//function Enemy(name, hitPoints, attackPower, inventory){
//	this.name = name;
//	this.hitPoints = hitPoints;
//	this.attackPower = attackPower;
//	this.inventory = inventory;
//}
//
//
//while (player.life() === "Alive") {
//	
//
//	console.log(player.hitPoints)
//	player.hitPoints --
//	
//	
//}
//
//console.log(player.life())	
//
//
//
//	var choices = ['Walk', 'Fight', 'Hide', 'Inventory']
//	
//	
////	index = readlineSync.keyInSelect(choices, "where would you like to start?")
////	
//	console.log( "good start")
//
//
//function walk()(
//)

