let titles = [
    "iOS Dev3loper",
    "iOS D3veloper",
    "iOS Develop3r",
    "i0S Developer",
    "iOX Developer",
    "iOS Develo?er",
    "iOS Deve?oper",
    "1os Developer",
    "iO5 Developer",
    "i?S Developer",
    "iOS @eveloper",
    "i@s Developer",
    "iOS Deve1oper",
    "iOS Develope?",
    "iOS ?eveloper",
    "iO? Developer",
    "!os Developer",
    "iOS Deve!oper",
    "?OS Developer",
    "iOS De?eloper",
    "iOS D?veloper"
];

let inputIndex = 0;
let inputText = 'whoami';
let initialAnimationCompleted = false;

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("DOMContentLoaded", function(event) {

    setTimeout(beginConsoleAnimation, 1800);

    setInterval(() => {

        document.title = document.title == "erencelik" ? "0x65726e" : "erencelik";

        beginLoopTitleAnimation();

    }, 6000);

});

function beginConsoleAnimation() {

    let element = document.getElementById("console-input");

    element.innerHTML = "";

    if(!element.classList.contains("typing")) {
        element.classList.add("typing");
    }

    document.getElementById("switcher").innerHTML = "&nbsp;";

    setTimeout(() => {
        consoleMimicIterateTypeWrite();
    }, 256);

}

function consoleMimicIterateTypeWrite() {

    let element = document.getElementById("console-input");

    if (inputIndex < inputText.length) {

        element.innerHTML += inputText.charAt(inputIndex);

        inputIndex++;

        setTimeout(consoleMimicIterateTypeWrite, 128);

    } else {

        if(element.innerHTML == inputText) {

            inputIndex = 0;

            setTimeout(() => {
                
                element.classList.remove("typing");

                setTimeout(() => {

                    initialAnimationCompleted = true;

                    beginLoopTitleAnimation();

                }, 256);
                
            }, 256);

        }

    }

}

function beginLoopTitleAnimation() {

    let count = getRandomInt(3, 8);

    let interval = getRandomInt(77, 99);

    loopTitles(count, interval);

}

function loopTitles(count, interval) {

    var element = document.getElementById("switcher");

    var copied = [...titles];

    var index = getRandomInt(0, copied.length);

    var title = copied[index];

    copied.splice(index, 1);

    element.innerHTML = title;

    for(let i = 0; i <= count; i++) {

        setTimeout(() => {

            if(i == count) {

                element.innerHTML = "iOS Developer";

            } else {

                index = getRandomInt(0, copied.length);

                title = copied[index]
                
                copied.splice(index, 1);

                element.innerHTML = title;

            }

        }, (interval*(i+1))-(i*interval*(1/count)));

    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}