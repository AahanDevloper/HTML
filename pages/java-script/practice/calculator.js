let getText = "";
document.getElementById("display").innerHTML = 0;
let num1 = 0;
let num2 = 0;
const getNumber = (text) => {
    document.getElementById("display").innerHTML += text;
    getText += text;
    additionOn = false;
    if (text == "+") {
        additionOn = true;
    }
    if (additionOn) {
        num1 = getText;
    }
    else if (text != "+") {
        num2 = getText;
    }
    console.log(getText)
    console.log("Num1 :" + num1)
    console.log("Num2 :" + num2)
}
const allClear = () => {
    document.getElementById("display").innerHTML = "0";
    getText = "";
}