const lineFirst = document.querySelector("div.line.first");
const lineTwo = document.querySelector("div.line.two");
const lineThree = document.querySelector("div.line.three");
const lineFour = document.querySelector("div.line.four");
const lineFive = document.querySelector("div.line.five");
const lineSix = document.querySelector("div.line.six");
const lineLast = document.querySelector("div.line.last");
const stopSign = document.querySelector("div.container.lines");
const refresh = document.querySelector("svg")

const startButton = document.querySelector("button.start");

let index;

function findIndexOfEvent(event) {
    index = event.target.classList[1] - 1;
}

function changeColor(event) {
    findIndexOfEvent(event);
    switch (index) {
        case 0:
            lineFirst.classList.add("coloured");
            lineTwo.classList.remove("coloured");
            lineThree.classList.remove("coloured");
            lineFour.classList.remove("coloured");
            lineFive.classList.remove("coloured");
            lineSix.classList.remove("coloured");
            lineLast.classList.remove("coloured");
            break;
        case 1:
            lineFirst.classList.add("coloured");
            lineTwo.classList.add("coloured");
            lineThree.classList.remove("coloured");
            lineFour.classList.remove("coloured");
            lineFive.classList.remove("coloured");
            lineSix.classList.remove("coloured");
            lineLast.classList.remove("coloured");
            break;
        case 2:
            lineFirst.classList.add("coloured");
            lineTwo.classList.add("coloured");
            lineThree.classList.add("coloured");
            lineFour.classList.remove("coloured");
            lineFive.classList.remove("coloured");
            lineSix.classList.remove("coloured");
            lineLast.classList.remove("coloured");
            break;
        case 3:
            lineFirst.classList.add("coloured");
            lineTwo.classList.add("coloured");
            lineThree.classList.add("coloured");
            lineFour.classList.add("coloured");
            lineFive.classList.remove("coloured");
            lineSix.classList.remove("coloured");
            lineLast.classList.remove("coloured");
            break;
        case 4:
            lineFirst.classList.add("coloured");
            lineTwo.classList.add("coloured");
            lineThree.classList.add("coloured");
            lineFour.classList.add("coloured");
            lineFive.classList.add("coloured");
            lineSix.classList.remove("coloured");
            lineLast.classList.remove("coloured");
            break;
        case 5:
            lineFirst.classList.add("coloured");
            lineTwo.classList.add("coloured");
            lineThree.classList.add("coloured");
            lineFour.classList.add("coloured");
            lineFive.classList.add("coloured");
            lineSix.classList.add("coloured");
            lineLast.classList.remove("coloured");
            break;
        case 6:
            lineFirst.classList.add("coloured");
            lineTwo.classList.add("coloured");
            lineThree.classList.add("coloured");
            lineFour.classList.add("coloured");
            lineFive.classList.add("coloured");
            lineSix.classList.add("coloured");
            lineLast.classList.add("coloured");
            break;
    }
}

function deleteColor(line) {
    line.classList.remove("coloured");
}

function changeInnerText() {
    stopSign.innerHTML = "<h1>STOP</h1>";
    stopSign.classList.add("red");
}

function changeStartText(num) {
    num--;
    interval = setInterval(function(){
        startButton.innerHTML = num--;
    }, 1000);
}


function deleteStart() {
    clearInterval(interval);
    startButton.innerHTML = "Enjoy!";
}

function timerFunctionality() {
    console.log(lineFirst.classList);
    switch (index) {
                case 0:
                    setTimeout(function(){deleteColor(lineFirst)}, 8000);
                    setTimeout(function(){changeInnerText()}, 8100);
                    changeStartText(8);
                    setTimeout(function(){deleteStart()}, 8100);
                    break;
                case 1:
                    setTimeout(function(){deleteColor(lineTwo)}, 5000);
                    setTimeout(function(){deleteColor(lineFirst)}, 10000);
                    setTimeout(function(){changeInnerText()}, 10100);
                    changeStartText(10);
                    setTimeout(function(){deleteStart()}, 10100);
                    break;
                case 2:
                    setTimeout(function(){deleteColor(lineThree)}, 5000);
                    setTimeout(function(){deleteColor(lineTwo)}, 10000);
                    setTimeout(function(){deleteColor(lineFirst)}, 15000);
                    setTimeout(function(){changeInnerText()}, 15100);
                    changeStartText(15);
                    setTimeout(function(){deleteStart()}, 15100);
                    break;
                case 3:
                    setTimeout(function(){deleteColor(lineFour)}, 5250);
                    setTimeout(function(){deleteColor(lineThree)}, 10500);
                    setTimeout(function(){deleteColor(lineTwo)}, 15750);
                    setTimeout(function(){deleteColor(lineFirst)}, 21000);
                    setTimeout(function(){changeInnerText()}, 21100);
                    setTimeout(function(){deleteStart()}, 21100);
                    changeStartText(21);
                    break;
                case 4:
                    setTimeout(function(){deleteColor(lineFive)}, 4800);
                    setTimeout(function(){deleteColor(lineFour)}, 9600);
                    setTimeout(function(){deleteColor(lineThree)}, 14400);
                    setTimeout(function(){deleteColor(lineTwo)}, 19200);
                    setTimeout(function(){deleteColor(lineFirst)}, 24000);
                    setTimeout(function(){changeInnerText()}, 24100);
                    setTimeout(function(){deleteStart()}, 24100);
                    changeStartText(24);
                    break;
                case 5:
                    setTimeout(function(){deleteColor(lineSix)}, 4667);
                    setTimeout(function(){deleteColor(lineFive)}, 9333);
                    setTimeout(function(){deleteColor(lineFour)}, 14001);
                    setTimeout(function(){deleteColor(lineThree)}, 18668);
                    setTimeout(function(){deleteColor(lineTwo)}, 23335);
                    setTimeout(function(){deleteColor(lineFirst)}, 28000);
                    setTimeout(function(){changeInnerText()}, 28100);
                    setTimeout(function(){deleteStart()}, 28100);
                    changeStartText(28);
                    break;
                case 6:
                    setTimeout(function(){deleteColor(lineLast)}, 5429);
                    setTimeout(function(){deleteColor(lineSix)}, 10858);
                    setTimeout(function(){deleteColor(lineFive)}, 16287);
                    setTimeout(function(){deleteColor(lineFour)}, 21715);
                    setTimeout(function(){deleteColor(lineThree)}, 27145);
                    setTimeout(function(){deleteColor(lineTwo)}, 32574);
                    setTimeout(function(){deleteColor(lineFirst)}, 38000);
                    setTimeout(function(){changeInnerText()}, 38100);
                    setTimeout(function(){deleteStart()}, 38100);
                    changeStartText(38);
                    break;
    }
}

function reNew() {
    window.location.reload();    
}

window.addEventListener("click", changeColor);
startButton.addEventListener("click", timerFunctionality);
refresh.addEventListener("click", reNew);