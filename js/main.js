let jobTitle = "iOS Developer";

let chars = {
    'i': ['?', '!', '1'],
    'O': ['?', '@', '0'],
    'S': ['?', '5', 'X'],
    ' ': [' '],
    'D': ['?', '@'],
    'e': ['?', '3'],
    'v': ['?'],
    'l': ['?', '!', '1'],
    'o': ['?', '0', '@'],
    'p': ['?'],
    'r': ['?']
};

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

    let count = getRandomInt(4, 9);

    let interval = getRandomInt(66, 99);

    loopTitles(count, interval);

}

function loopTitles(count, interval) {

    var element = document.getElementById("switcher");

    for(let i = 0; i <= count; i++) {

        setTimeout(() => {

            if(i == count) {

                element.innerHTML = jobTitle;

            } else {

                var index = getRandomInt(0, jobTitle.length);

                var char = jobTitle[index];

                let replacements = chars[char];

                let replacement = replacements[getRandomInt(0, replacements.length)];

                element.innerHTML = setCharAt(jobTitle, index, replacement);

            }

        }, (interval*(i+1))-(i*interval*(1/count)));

    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function setCharAt(str ,index, chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}