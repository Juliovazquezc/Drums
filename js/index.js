//Folder that contains the audios files
var baseAudios = "sounds/";
var keyLetters = ["w","a","s","d","j","k","l"];
var buttons = document.querySelectorAll(".drum");

for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
    });  
}

document.addEventListener("keydown", function (event) {
    var keyPressed = event.key.toLowerCase();
    if(keyLetters.includes(keyPressed)){
        makeSound(keyPressed);
    }
});

function makeSound(letter) {
    switch(letter){
        case "w":
            var tom1 = new Audio(baseAudios+"tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio(baseAudios+"tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio(baseAudios+"tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio(baseAudios+"tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio(baseAudios+"snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio(baseAudios+"crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio(baseAudios+"kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log(letter);
    }
}

