var readlineSync = require('readline-sync');

var player = {
	name: "Player",
	hitPoints: 4,
	attackPower: 4,
	inventory: ["Chocolate"],
	numBattles: 0,
	life: function () {

		if (this.hitPoints === 0) {
			return "and the end of life."
		}

		return "Alive"
	}
};

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var enemy = {
	name: "",
	hitPoints: 0,
	attackPower: 0,
	weapon: "",
}

function Enemy(name, hitPoints, attackPower, weapon) {
	this.name = name;
	this.hitPoints = hitPoints;
	this.attackPower = attackPower;
	this.weapon = weapon;
}

function theEnemy() {
	var randomNum = randomInt(1, 3)
	
	if (randomNum === 1) {
		
		theEnemy = this.enemyTroll
	}
	if (randomNum === 2) {
		
		theEnemy = this.enemyGoblin
	} else {
		
		theEnemy = this.enemyMan
		
	}
return theEnemy
}

theEnemy()

var enemyGoblin = new Enemy("Goblin", 2, 2, "dagger");
var enemyTroll = new Enemy("Troll", 1, 1, "hammer");
var enemyMan = new Enemy("Man", 1, 1, "bow");


function fight() {

	var playerWin = randomInt(1,3) //* //theEnemy.attackPower 
	
	var playerLose = randomInt(1,3)// * //player.attackPower
	//var playerWin = randomInt(1, 3) //* player.attackPower
	//var playerLose = randomInt(1, 3) //* theEnemy.attackPower


	if (playerWin > playerLose) {

		player.numBatttles + 1
		player.hitPoints++

			console.log(player.hitPoints + "hitPo")
		console.log(player.numBattles + "numBat")

		console.log(player.name + " you've won the battle the enemy is defeated!")

	} else {


		player.hitPoints--

			console.log(player.name + " you've lost the battle, but you got away!")

		console.log(player.hitPoints)

		readlineSync.keyInYN("would you like to coninue walking? ")

	}
	readlineSync.keyInYN("would you like to coninue walking? ")


}


function walk() {

	var walkChoice = randomInt(1, 3);
	// console.log(walkChoice)
	if (walkChoice === 1) {

		console.log("You are walking peacefully through the forest..")

		readlineSync.keyInYN("would you like to coninue walking? ")
		walk()

	} else {

		console.log("You've crossed an enemy, prepare to fight!")

		fight()
		player.numBattles++
			console.log(player.numBattles)
	}
}


var playerName = ['Glenn', 'Hansel', 'Humle', ]

index = readlineSync.keyInSelect(playerName, "Welcome to the Dale, you are an elf in this adventure, choose the name of your avatar: ")

player.name = playerName[index]


console.log(player.name + " you are the champion of this story lets get on your way! "),

	walk()



while (player.life() === "Alive") {

	walk()



}

console.log(player.life())
