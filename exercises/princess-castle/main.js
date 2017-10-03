class Player {
	constructor(name) {
		this.name = name;
		this.totalCoins = 0;
		this.status = "Powered Up";
		this.star = true;

	}

	setName(namePicked) {

		this.name = namePicked
	}


	gotHit() {

		if (this.status === "Powered Up") {
			return this.status = "Big"
		} else if (this.status === "Big") {
			return this.status = "Small"
		} else if (this.status === "Small") {
			return this.status = "Dead"
		}

	}

	gotPoweredUp() {

		if (this.status === "Small") {

			return this.status = "Big"

		} else if (this.status === "Big") {

			return this.status = "Powered Up"
		}
	}

	gameActive() {

		if (this.status === "Dead") {

			return false
		}
	}
	addCoin() {

		return this.totalCoins += 1
	}

	print() {

		console.log(charecter)
	}

	randomRange() {

		let randomNum = randomInt(0, 3)
		if (randomNum === 0) {
			this.gotHit()
			console.log(this.status)
		} else if (randomNum === 1) {
			this.gotPoweredUp()
			console.log(this.status)
		} else if (randomNum === 2) {
			this.addCoin()
			console.log(this.totalCoins)
		}


	}

}


const charecter = new Player("Mario", 2, "Powered Up", true)
charecter.randomRange()
charecter.randomRange()
charecter.randomRange()



function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;

}
