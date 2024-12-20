
const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const faces = ["♥", "♦", "♠", "♣"];



function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function generateRandomCard() {
    const numup = document.querySelector(".numup");
    const face = document.querySelector(".face");
    const numdown = document.querySelector(".numdown");


    //to generate random number and assign it to the top and bottom
    const numberGenerator = randomElement(number);
    const faceGenerator = randomElement(faces)


    numup.textContent = numberGenerator;
    face.textContent = faceGenerator;
    numdown.textContent = numberGenerator;



    if (faceGenerator === "♥" || faceGenerator === "♦") {

        numup.style.color = 'red';
        face.style.color = 'red';
        numdown.style.color = 'red';
    }
    else {
        numup.style.color = 'black';
        face.style.color = 'black';
        numdown.style.color = 'black';
    }



}