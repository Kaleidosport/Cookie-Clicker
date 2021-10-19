let counter = 0
let unitsPerSec = 0
let additionalUnits = []
let pileOfBonuses = []

let astronautCount = 0
let spaceCraftCount = 0
let spaceShuttleCount = 0
let NASACount = 0
let TonyStarkCount = 0

// onclick canvas
function planetClick() {
    counter++
    document.getElementById("score").innerText = counter 
}

const BOOSTERS = [
    ["buyHubble", 2, 10, 0], ["buyAstronaut", 10, 50, 0],
    ["buySpacecraft", 75, 375, 0], ["buySpaceShuttle", 200, 1000, 0],
    ["buyNASA", 1000, 5000, 0], ["buyTonyStark", 5000, 10000, 0]
]

// document.getElementById("buyHubble").disabled = "true"
// document.getElementById("buyAstronaut").disabled = "true"
// document.getElementById("buySpaceCraft").disabled = "true"
// document.getElementById("buySpaceShuttle").disabled = "true"
// document.getElementById("buyNASA").disabled = "true"
// document.getElementById("buyTonyStark").disabled = "true"

setInterval(() => {
    counter > 50 ? document.getElementById("buyAstronaut").classList.remove("hidden") : console.log("Not enough constructs")
    counter > 350 ? document.getElementById("buySpaceCraft").classList.remove("hidden") : console.log("Not enough constructs")
    counter > 1000 ? document.getElementById("buySpaceShuttle").classList.remove("hidden") : console.log("Not enough constructs")
    counter > 5000 ? document.getElementById("buyNASA").classList.remove("hidden") : console.log("Not enough constructs")
    counter > 10000 ? document.getElementById("buyTonyStark").classList.remove("hidden") : console.log("Not enough constructs")

}, 1000)

document.getElementById("buyAstronaut").addEventListener("click", () => {
    if (counter > 50) {
        astronautCount++
        counter -= 50
        document.getElementById("astronautCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("astronautCount").innerHTML = astronautCount
    }
    else console.log("Lacking constructs to buy more of this one")
})

document.getElementById("buySpaceCraft").addEventListener("click", () => {
    if (counter > 350) {
        spaceCraftCount++
        counter -= 350
        document.getElementById("spaceCraftCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("spaceCraftCount").innerHTML = spaceCraftCount
    }
    else console.log("Lacking constructs to buy more of this one")
})

document.getElementById("buySpaceShuttle").addEventListener("click", () => {
    if (counter > 1000) {
        spaceShuttleCount++
        counter -= 1000
        document.getElementById("spaceShuttleCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("spaceShuttleCount").innerHTML = spaceShuttleCount
    }
    else console.log("Lacking constructs to buy more of this one")
})

document.getElementById("buyNASA").addEventListener("click", () => {
    if (counter > 5000) {
        NASACount++
        counter -= 5000
        document.getElementById("NASACount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("NASACount").innerHTML = NASACount
    }
    else console.log("Lacking constructs to buy more of this one")
})

document.getElementById("buyTonyStark").addEventListener("click", () => {
    if (counter > 10000) {
        TonyStarkCount++
        counter -= 10000
        document.getElementById("TonyStarkCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("TonyStarkCount").innerHTML = TonyStarkCount
    }
    else console.log("Lacking constructs to buy more of this one")
})


BOOSTERS.forEach((bonus, index) => {
    let getBonus = new Bonuses(...bonus)
    pileOfBonuses.push(getBonus)

    if (bonus[0] === "click") {
        document.getElementById(`${bonus[0]}`).addEventListener("click", () => {
            pileOfBonuses[index].updateCounter()
        })
    }
})