// Increase the variable storing the score by 1, then display the current score inside the label
document.getElementById("play").addEventListener("click", function(){
    
    counter = this.bonusAmount + counter;
    document.getElementById("score").innerText = counter;

});

// This button will act as a multiplier. When called this button will permanently multiply the number
// of points per click
document.getElementById("bonus").addEventListener("click", function(){
    // deactivate the buttons if the player doesn't have the points
    counter > this.bonusprice ? counter -= this.bonusPrice : counter

    this.bonusAmount = Math.pow( this.bonusAmount, this.bonusTotal);

 
    // bonus
});



// Local Storage

// first get Data
function getData(){
    let displayScore = document.getElementById("score");
    let dataStorage = JSON.parse(localStorage.getItem("data"));
    dataStorage == null ? displayScore.innerHTML = "0" : displayScore.innerHTML = dataStorage["counter"];
};

// second set Data  == WARNING WE MUST PUT setData() in the HTML ==
// {/* <p><button onclick="setData()" id="run" type="button">click</button></p> */}
function setData(counter, unitsPerSec, additionalUnits, pileOfBonuses){
    let coord =
    {
        "counter":counter,
        "unitsPerSec":unitsPerSec,
        "additionalUnits":additionalUnits,
        "pileOfBonuses":pileOfBonuses
    };
    
    localStorage.setItem("data", JSON.stringify(coord) );
    document.getElementById("score").innerHTML = coord["counter"];
    


};
window.onbeforeunload = setData;

// set score to zero
// <p><button onclick="setZero()" id="zero" type="button">replay</button></p>
function setZero(){
    let coord ={"counter":0, "unitsPerSec":0, "additionalUnits":0, "pileOfBonuses":[]};
    localStorage.setItem("data", JSON.stringify(coord));
    document.getElementById("score").innerHTML = coord["counter"];
}
// call
window.onload = () => {getData();
    //code
     }


function planetClick() {
    counter = counter + 1*n;
    document.getElementById("score").innerText = counter 
}
// --------------------------------------

// Bonus 30 sec
setInterval(() => {function multiplaction(n){
    let n=n;
    const x = Date.now() + 30000;
    
    if (Date.now < x){
        n=n*2;
        return n;
    }
    else{
        n=1;
        return n;
    }
    }
    
}, 1000);
// while (Date.now < x + 30000){
//     n=n*2
// }
