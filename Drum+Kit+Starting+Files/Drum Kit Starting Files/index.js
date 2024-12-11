let numberOfDrumButton = document.querySelectorAll(".drum").length;

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play();
            break;

        case "a":
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play();
            break;

        case "j":
            var audio = new Audio('./sounds/snare.mp3')
            audio.play();
            break;

        case "k":
            var audio = new Audio('./sounds/crash.mp3')
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play();
            break;

        default:
            break;
    }
}


for (let i = 0; i < numberOfDrumButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    console.log(activeButton);
    activeButton.classList.add("pressed");
    
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}

