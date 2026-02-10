let sum = 0;
let x;
let winStreak = 0;
let i = 0;
let rows;
let digit;
let time;
// on click start button
function start() {
    // level setting
    let level = document.getElementById("dropdown").value;
    if (level == 1) {
        rows = 5;
        digit = 1;
        time = 2000;
    }
    else if (level == 2) {
        rows = 10;
        digit = 1;
        time = 1500;
    }
    else if (level == 3) {
        rows = 20;
        digit = 1;
        time = 700;
    }
    else if (level == 4) {
        rows = 17;
        digit = 2;
        time = 1000;
    }
    else if (level == 5) {
        rows = 14;
        digit = 3;
        time = 1500;
    }
    else {
        rows = Number(document.getElementById("rows").value);
        time = document.getElementById("time").value * 1000;
        digit = document.getElementById("digit").value;
    }
    i = 0;
    sum = 0;
    document.getElementById("answer").value = "";
    // for invalid input
    if (time <= 0 || digit < 1 || rows < 2) {
        alert("Invalid input. Check your inputs:\n\n 1) Time must be greater than 0!\n 2) Digit cannot be less than 1!\n 3) At least 2 rows are required!")
        location.reload()
    }
    // set interval function
    x = setInterval(function () {

        // random number generation
        let random = Math.floor(Math.random() * (10 ** digit));
        // updation of sum
        sum += random;
        // displaying random number
        document.getElementById("number").innerHTML = random;
        // displaying = and + sign
        setTimeout(() => {
            // if question is over
            if (rows == i) {
                document.getElementById("number").innerHTML = "=";
            }
            else {
                document.getElementById("number").innerHTML = "+";
            }
        }, time * 0.8)

        i++;
        // random numbers stop after completing of question
        if (i >= rows) {
            clearInterval(x);
        }
    }, time);
}

function check() {
    if (i < rows) {
        alert("Question incomplete.")
    }
    else {
        if (i == 0) {
            alert("First start the question")
        }
        else {
            // user's answer
            let userAnswer = Number(document.getElementById("answer").value);
            // if answer is correct
            if (userAnswer == sum) {
                document.getElementById("display").innerHTML = "✅ Correct answer 🎊"
                document.getElementById("display").style.color = "rgb(0, 255, 153)"
                document.getElementById("win-streak").style.color = "rgb(0, 255, 153)"
                // Win streak increases
                winStreak++;
                document.getElementById("win-streak").innerHTML = "Current win streak is " + winStreak + "!"
            }
            // if answer is incorrect
            else {
                document.getElementById("display").innerHTML = "❌Correct answer is " + sum + " ❌";
                document.getElementById("display").style.color = "rgb(255, 29, 29)";
                document.getElementById("win-streak").style.color = "rgb(255, 29, 29)";
                winStreak = 0;
                // win streak becomes 0
                document.getElementById("win-streak").innerHTML = "Current win streak is " + winStreak
            }
        }
    }
}