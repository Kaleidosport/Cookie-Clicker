let counter = 0
let unitsPerSec = 0
let additionalUnits = []

const AUGMENTERS = [
    ["Clicker", x, y, z], ["Astronaut", x, y, z],
    ["Spacecraft", x, y, z], ["Space shuttle", x, y, z],
    ["NASA", x, y, z], ["Tony Stark", x, y, z]
]

class Bonuses {
    constructor(bonusName, bonusAmount, bonusPrice, bonusTotal) {
        this.bonusName = bonusName
        this.bonusAmount = bonusAmount
        this.bonusPrice = bonusPrice
        this.bonusTotal = bonusTotal
    }

    functionbyZac() {
        additionalUnits += this.bonusAmount * this.bonusTotal
    } // Variable dedicated to the amount of units by second 

    functionByZac2() {
        counter > this.bonusPrice ? counter -= this.bonusPrice : counter
        this.bonusTotal++
    } // Variable dedicated to buying items and deducting from total
}

