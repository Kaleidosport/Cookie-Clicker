let counter = 0
let unitsPerSec = 0
let pileOfBonuses = []

let hubbleCount = 0
let astronautCount = 0
let spaceCraftCount = 0
let spaceShuttleCount = 0
let NASACount = 0
let TonyStarkCount = 0

let hubbleBonus = 2
let astronautBonus = 10
let spacecraftBonus = 70
let spaceShuttleBonus = 500
let NASABonus = 5000
let TonyStarkBonus = 25000

window.onload = () => {getData();
    //code
     }

// Local Storage
function getData(){
    let displayScore = document.getElementById("score");
    let dataStorage = JSON.parse(localStorage.getItem("data"));
    dataStorage == null ? displayScore.innerHTML = "0" : displayScore.innerHTML = dataStorage["counter"];
};

// second set Data
// {/* <p><button onclick="setData()" id="run" type="button">click</button></p> */}
function setData(counter, unitsPerSec){
    let coord =
    {
        "counter":counter,
        "unitsPerSec":unitsPerSec,
        
    };
    
    localStorage.setItem("data", JSON.stringify(coord) );
    document.getElementById("score").innerHTML = coord["counter"];
    


};


// set score to zero
// <p><button onclick="setZero()" id="zero" type="button">replay</button></p>
function setZero(){
    let coord ={"counter":0, "unitsPerSec":0,};
    localStorage.setItem("data", JSON.stringify(coord));
    document.getElementById("score").innerHTML = coord["counter"];
}



setInterval(() => {
    counter > 100 ? document.getElementById("buyAstronaut").disabled = false : console.log("Not enough constructs")
    counter > 1000 ? document.getElementById("buySpaceCraft").disabled = false : console.log("Not enough constructs")
    counter > 5000 ? document.getElementById("buySpaceShuttle").disabled = false : console.log("Not enough constructs")
    counter > 45000 ? document.getElementById("buyNASA").disabled = false : console.log("Not enough constructs")
    counter > 100000 ? document.getElementById("buyTonyStark").disabled = false : console.log("Not enough constructs")

}, 1000)

document.getElementById("buyHubble").addEventListener("click", () => {
    if (counter > 20) {
        hubbleCount++
        counter -= 20
        unitsPerSec += hubbleBonus * hubbleCount
        document.getElementById("score").innerText = counter
        document.getElementById("hubbleCount").innerHTML = hubbleCount
        document.getElementById("production").innerText = unitsPerSec
    }

    setInterval(() => {
        counter += unitsPerSec
        document.getElementById("score").innerText = counter
    }, 2500)
})

document.getElementById("buyAstronaut").addEventListener("click", () => {
    if (counter > 100) {
        astronautCount++
        counter -= 100
        unitsPerSec += astronautBonus * astronautCount
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

document.getElementById("buySpaceCraft").addEventListener("click", () => {
    if (counter > 1000) {
        spaceCraftCount++
        counter -= 1000
        unitsPerSec += spacecraftBonus * spaceCraftCount
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

document.getElementById("buySpaceShuttle").addEventListener("click", () => {
    if (counter > 5000) {
        spaceShuttleCount++
        counter -= 5000
        unitsPerSec += spaceShuttleBonus * spaceShuttleCount
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

document.getElementById("buyNASA").addEventListener("click", () => {
    if (counter > 45000) {
        NASACount++
        counter -= 45000
        unitsPerSec += NASABonus * NASACount
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

document.getElementById("buyTonyStark").addEventListener("click", () => {
    if (counter > 100000) {
        TonyStarkCount++
        counter -= 100000
        unitsPerSec += TonyStarkBonus * TonyStarkCount
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
window.onbeforeunload = setData(counter, unitsPerSec);