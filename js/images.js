const mybox = document.querySelector(".box");
const images = ["images/SREECH.jpg","images/DepressionTrain.jpg","images/Wamen.jpg"];


mybox.addEventListener("click",changeImage);

let rndPrevVal = 0;

function UpdateRndPrevVal(rnd) {
    rndPrevVal = rnd;
}
function changeImage() {
    
    let rnd = Math.floor(Math.random()* images.length);
    

    if (rnd === rndPrevVal) {
        console.log(rnd);
        changeImage();
    }
    else {
        document.getElementById("myPicture").src = images[rnd];
        UpdateRndPrevVal(rnd);
    }
}