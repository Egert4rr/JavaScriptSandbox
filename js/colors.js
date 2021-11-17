//console.log("hello from script");
const myButton = document.querySelector("button");
const mybox = document.querySelector(".box");
const colors = ["red","green","blue","yellow"];
//console.log(myButton);

myButton.addEventListener("click",changeColor);


let rndPrevVal = 0;

function UpdateRndPrevVal(rnd) {
    rndPrevVal = rnd;
}
function changeColor() {
    //console.log("hello from changecolor")
    let rnd = Math.floor(Math.random()* colors.length);

    if (rnd === rndPrevVal) {
        console.log(rnd);
        changeColor();
    }
    else {
        mybox.style.backgroundColor = colors[rnd];
        UpdateRndPrevVal(rnd);
    }
}

