let player1DiceImg = document.getElementsByClassName("img1")[0];
let player2DiceImg = document.getElementsByClassName("img2")[0];
let results = document.querySelector("h1");
let dice1 = 1;
let dice2 = 1;

player1DiceImg.setAttribute("src", "./images/dice1.png");
player2DiceImg.setAttribute("src", "./images/dice1.png");

function roll() {
    player1DiceImg.classList.add("spin");
    player2DiceImg.classList.add("spin");

    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    player1DiceImg.setAttribute("src", `./images/dice${dice1}.png`);
    player2DiceImg.setAttribute("src", `./images/dice${dice2}.png`);

    setTimeout(() => {
        player1DiceImg.classList.remove("spin");
        player2DiceImg.classList.remove("spin");

        if (dice1 > dice2) {
            results.innerHTML = "🚩 Player 1 Win!";
        } else if (dice2 > dice1) {
            results.innerHTML = "Player 2 Win! 🚩";
        } else {
            results.innerHTML = "🚩 It's a tie! 🚩";
        }
    }, 150);
}
