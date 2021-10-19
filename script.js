// Variables dedicated to counting items
let counter = 0 // Total amount of constructs
let unitsPerSec = 0 // Constructs produced per second...or every 2,5 seconds
let pileOfBonuses = [] // Unused???

// Variables dedicated to inventory multipliers
let hubbleCount = 0 // Total amount of hubbles, aka the basic auto-clicker
let astronautCount = 0 // Total amount of astronauts, aka auto-clicker MarkII
let spaceCraftCount = 0 // Total amount of spacecrafts, aka auto-clicker MarkIII
let spaceShuttleCount = 0 // Total amount of space shuttles, aka our multiplying mob
let NASACount = 0 // Total amount of NASA factories, aka our big gun
let TonyStarkCount = 0 // Total amount of Tony Stark generated, aka our Deus ex Machina

// Variables dedicated to the values associated to our aforementioned bonuses
let hubbleBonus = 2 // Well, that's a basic auto-clicker for you: + 2 constructs per 2,5 seconds
let astronautBonus = 10 // + 10 constructs per 2,5 seconds
let spacecraftBonus = 70 // + 70 constructs per 2,5 seconds
let spaceShuttleBonus = 500 // To be edited
let NASABonus = 5000 // + 5000 constructs per 2,5 seconds
let TonyStarkBonus = 25000 // + 25000 constructs per 2,5 seconds, let's roll

// onclick function associated to the canvas area: click, produce constructs, rinse and repeat
function planetClick() {
    counter++ 
    document.getElementById("score").innerText = counter 
}

// Check every second whether conditions are met to enable buying actions associated to our bonuses
setInterval(() => {
    counter > 100 ? document.getElementById("buyAstronaut").disabled = false : console.log("Not enough constructs")
    counter > 1000 ? document.getElementById("buySpaceCraft").disabled = false : console.log("Not enough constructs")
    counter > 5000 ? document.getElementById("buySpaceShuttle").disabled = false : console.log("Not enough constructs")
    counter > 45000 ? document.getElementById("buyNASA").disabled = false : console.log("Not enough constructs")
    counter > 100000 ? document.getElementById("buyTonyStark").disabled = false : console.log("Not enough constructs")

}, 1000) // Could and should have associated the costs to specific variables

// Auto-clicker event
document.getElementById("buyHubble").addEventListener("click", () => {
    if (counter > 20) {
        hubbleCount++
        counter -= 20
        unitsPerSec += hubbleBonus // Add the bonus'value to the automatic production
        document.getElementById("score").innerText = counter
        document.getElementById("hubbleCount").innerHTML = hubbleCount
        document.getElementById("production").innerText = unitsPerSec
    }

    setInterval(() => {
        counter += unitsPerSec // Total amount of constructs goes up every 2,5 seconds
        document.getElementById("score").innerText = counter
    }, 2500)
})

// Astronaut event
document.getElementById("buyAstronaut").addEventListener("click", () => {
    if (counter > 100) {
        astronautCount++
        counter -= 100
        unitsPerSec += astronautBonus
        document.getElementById("astronautCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("astronautCount").innerHTML = astronautCount
        document.getElementById("production").innerText = unitsPerSec
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

// Spacecraft event
document.getElementById("buySpaceCraft").addEventListener("click", () => {
    if (counter > 1000) {
        spaceCraftCount++
        counter -= 1000
        unitsPerSec += spacecraftBonus
        document.getElementById("spaceCraftCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("spaceCraftCount").innerHTML = spaceCraftCount
        document.getElementById("production").innerText = unitsPerSec
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

// Space shuttle event
document.getElementById("buySpaceShuttle").addEventListener("click", () => {
    if (counter > 5000) {
        spaceShuttleCount++
        counter -= 5000
        unitsPerSec += spaceShuttleBonus
        document.getElementById("spaceShuttleCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("spaceShuttleCount").innerHTML = spaceShuttleCount
        document.getElementById("production").innerText = unitsPerSec
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

// NASA event
document.getElementById("buyNASA").addEventListener("click", () => {
    if (counter > 45000) {
        NASACount++
        counter -= 45000
        unitsPerSec += NASABonus
        document.getElementById("NASACount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("NASACount").innerHTML = NASACount
        document.getElementById("production").innerText = unitsPerSec
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

// Tony Stark event
document.getElementById("buyTonyStark").addEventListener("click", () => {
    if (counter > 100000) {
        TonyStarkCount++
        counter -= 100000
        unitsPerSec += TonyStarkBonus
        document.getElementById("TonyStarkCount").classList.remove("hidden")
        document.getElementById("score").innerText = counter
        document.getElementById("TonyStarkCount").innerHTML = TonyStarkCount
        document.getElementById("production").innerText = unitsPerSec
    }
    else console.log("Lacking constructs to buy more of this one")

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})