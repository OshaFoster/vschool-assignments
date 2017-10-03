var readlineSync = require('readline-sync');

var player = {
	name: "Player",
	hitPoints: 3,
	attackPower: 2,
	inventory: ["Chocolate", "Blade"],
	weapon: "",
	numBattles: 1,
	life: function () {

		if (this.hitPoints === 1) {
			return player.name + " you've fought valiantly but to the death, may you find peace on the otherside."

		} else if (this.numBattles === 8) {

			return player.name + ", when I told you you were the champion of this adventure I had my doubts, none the less you have proven me right, you have fought bravely and made it through the Diven Forsest, godspeed on your next adventure!  "

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
	var randomNum = randomInt(1, 6)

	if (randomNum === 1) {
		var theEnemy = enemyTroll
	}
	if (randomNum === 2) {
		var theEnemy = enemyGoblin
	}

	if (randomNum === 3) {
		var theEnemy = enemyMagician
	}
	if (randomNum === 4) {
		var theEnemy = enemyMan
	}
	if (randomNum === 5) {
		var theEnemy = evilFo
	}
	return theEnemy
}


console.log(theEnemy())

var enemyGoblin = new Enemy(" foul smelling Goblin", 2, 2, "Dagger");
var enemyTroll = new Enemy(" towering and twisted Troll", 1, 2, "Hammer");
var enemyMan = new Enemy(" very Bad Man", 1, 1, "Sword");
var enemyMagician = new Enemy(" Magician in black", 1, 2, "Wand")
var evilFo = new Enemy(" Elf from the wretched bog", 1, 1, "Bow")

function fight() {


	var theCurrentEnemy = theEnemy()

	var playerWin = randomInt(1, 3) * player.attackPower

	var playerLose = randomInt(1, 3) * theCurrentEnemy.attackPower

	console.log("---------------")

	console.log(" You've crossed a " + theCurrentEnemy.name + " , there was a battle!")

	console.log("-------*--------")

	if (playerWin > playerLose) {

		player.numBatttles + 1 // if statement somehwer in here to change
		player.hitPoints++
			if (player.inventory.indexOf(theCurrentEnemy.weapon) === -1) { ///dialogue based on fight number
				player.inventory.push(theCurrentEnemy.weapon)
			}

		console.log("You have " + player.hitPoints + " hitpoints")
		console.log("You've fought " + player.numBattles + " battle(s)")
		console.log(player.attackPower + " was your attack power")
		console.log(theCurrentEnemy.attackPower + " was the power of your adversary")

		console.log("-------*--------")

		console.log(player.name + " you've won the battle the enemy is defeated, you add needed weapons to your inventory!")
		console.log(player.inventory)

	} else {


		player.hitPoints--

			console.log("The " + theCurrentEnemy.name + " fought hard, you've lost the battle, but you got away!")
		console.log("---------------")

		console.log("Your player hitpoints are now " + player.hitPoints)
		console.log("You've fought " + player.numBattles + " battle(s)")


		readlineSync.keyInYN(" would you like to coninue walking? ")

	}
	readlineSync.keyInYN(" would you like to coninue walking? ")


}



function walk() {



	var walkChoice = randomInt(1, 7);

	if (walkChoice % 2 === 0) {

		console.log("---------------")
		console.log("You are walking peacefully through the forest..")
		if (readlineSync.keyInYN("would you like to coninue walking? ")) {} else {
			console.log(readlineSync.keyInYN("At this point there is no turning back, you MUST push y and continue"))

		}


	} else if (walkChoice === 3 || walkChoice === 5) {

		console.log("---------------")
		fightRun()
		chooseWeapon()
		fight()
		player.numBattles++
			//console.log(player.numBattles)
	} else if (walkChoice === 1) {

		console.log("---------------")
		console.log("You hear someone coming, you choose to hide")
		if (readlineSync.keyInYN("The mischif passes, would you like to go on? ")) {


		} else {

			console.log(readlineSync.keyInYN("The ground opens beneath you, you start to fall in, wouldn't you rather  walk?"))

			console.log("---------------")
			console.log(" Good choice, you narrowly escape with your life and continue walking.")
		}



	} else if (walkChoice === 7) {
		console.log("---------------")

		///somthing here enviroment



	}
}

function fightRun() {


	var chooseFight = ['Fight', 'Run', ]

	var fightIndex = readlineSync.keyInSelect(chooseFight, "You realize you are approaching a shady charecter, do you coose to run, or do you choose to fight!?")

	if (chooseFight[fightIndex] === "Fight") {

		console.log("You've chosen to fight!")

	} else {

		console.log("---------------")

		console.log("You chose to run, you escaped but you feel a bit like a chicken. You will prepare for when you next fight")
		walk()
	}

}




function chooseWeapon() {

	var weaponIndex = readlineSync.keyInSelect(player.inventory, "You look into your inventory and prepare for a fight, pick the weapon of your choice? ")

	var chooseWeapon = player.inventory[weaponIndex]

	console.log("*--------------*")

	if (chooseWeapon === "Chocolate") {

		console.log("You've chosen chocolate, chocolate is not a weapon, but it will certainly give you energy for the fight!")
	} else {
		console.log("You've cosen a " + chooseWeapon + " as your weapon.")
	}
}

//function countrySide() {
//	
//	var countrySide = ["Marsh", "bramble", "rockbluff"]
//	terrain = readlineSync.keyInSelect()
//}




var playerName = ['Glenn', 'Hansel', 'Humle', ]

var index = readlineSync.keyInSelect(playerName, "Welcome to the Dale, you are an elf in this adventure, choose the name of  your  avatar: ")

player.name = playerName[index]

console.log("---------------")

console.log(player.name + " you are the champion of this adventure! To win you must cross the Diven Forest, and make it out alive. You will fight enemies but you'll have weapons to help. Lets get you on your way! "),

	walk()



while (player.life() === "Alive") {

	walk()

}

console.log(player.life())





