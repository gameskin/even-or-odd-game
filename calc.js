let attempts = 0;
let score = 0;
function guess(userGuess) {

    // Increassing attempts by 1
    attempts++;
    document.getElementById("attempts").innerHTML = attempts

    // Generating a random number
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // determing the correct answer
    const correctAnswer = randomNumber % 2 == 0 ? "even" : "odd";

    // sfx function
    function sfx(isCorrect) {
        let audio = isCorrect
        ? document.getElementById("correct") 
        : document.getElementById("wrong");
        
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }

    if (correctAnswer == userGuess) {
        //update the display
        document.getElementById("display").innerHTML =
            "correct! the number is " + randomNumber;

        //increasing the player score
        score++;

        // updating the player score field
        document.getElementById("score").innerHTML = score

        //playing the sfx
        sfx(true);
    } else {
        //update the display
        document.getElementById("display").innerHTML =
            "wrong! the number is " + randomNumber;

        //playing the sfx
        sfx(false);
    }
}