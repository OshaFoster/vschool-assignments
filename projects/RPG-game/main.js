var readlineSync = require('readline-sync');

var player = {
	name: "Player",
	hitPoints: 4,
	attackPower: 2,
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
		var theEnemy = enemyTroll
	}
	if (randomNum === 2) {
		 var theEnemy = enemyGoblin
	} else {
		var theEnemy = enemyMan
		
	}
return theEnemy
}


console.log(theEnemy())

var enemyGoblin = new Enemy("Goblin", 2, 2, "dagger");
var enemyTroll = new Enemy("Troll", 1, 2, "hammer");
var enemyMan = new Enemy("Man", 1, 1, "bow");


function fight() {

	var theCurrentEnemy = theEnemy()
	
	var playerWin = randomInt(1,3) * player.attackPower 
	
	var playerLose = randomInt(1,3) * theCurrentEnemy.attackPower 
	
	
	if (playerWin > playerLose) {

		player.numBatttles + 1
		player.hitPoints++
		if(player.inventory.indexOf(theCurrentEnemy.weapon) === -1 ){player.inventory.push(theCurrentEnemy.weapon)}
	
			console.log(player.hitPoints + "hitPo")
		console.log(player.numBattles + "numBat")
		console.log(player.attackPower + "power")
		console.log(theCurrentEnemy.attackPower + "Enpower")

		console.log(player.name + " you've won the battle the enemy is defeated!")
		console.log(player.inventory)

	} else {

//add if statement if hitpoints are 0 dont continue
		player.hitPoints--
			
			console.log(player.name + " you've lost the battle, but you got away!")

		console.log(player.hitPoints)
		console.log(player.numBattles + "numBat")
		console.log(player.attackPower+ "power")
		console.log(enemy.attackPower+ "Enpower")


		readlineSync.keyInYN("would you like to coninue walking? ")
			
	}
	readlineSync.keyInYN("would you like to coninue walking? ")


}



function walk() {

	var walkChoice = randomInt(1, 4);
	// console.log(walkChoice)
	if (walkChoice % 2 === 0) {

		console.log("You are walking peacefully through the forest..")

		readlineSync.keyInYN("would you like to coninue walking? ")
		walk()

	} else if( walkChoice === 3) {

		console.log("You've crossed an enemy, prepare to fight!")

		fight()
		player.numBattles++
			console.log(player.numBattles)
	}else if(walkChoice === 1) {
		
		// check inventory and add to inventory when they find something
		console.log("You see somthing that looks out of place, you check to see if it might be useful")
		
	}
}


var playerName = ['Glenn', 'Hansel', 'Humle', ]

index = readlineSync.keyInSelect(playerName, "Welcome to the Dale, you are an elf in this adventure, choose the name of your avatar: ")

player.name = playerName[index]


console.log(player.name + " you are the champion of this story! To win you must cross the Diven Forest, and make it out alive. You will fight enemys but there will be help. Lets get you on your way! "),

	walk()



while (player.life() === "Alive") {

	walk()
	
	//break if battle numbers is over 10 youve made it through the forest



}

console.log(player.life())
