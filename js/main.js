var titles = [
    "iOS Developer",
    "tvOS Developer",
    "Blockchain Developer"
];

const chars = {
    'i': ['?', '!', '1'],
    'O': ['?', '@', '0'],
    'S': ['?', '5', 'X'],
    ' ': [' '],
    't': ['?', '7'],
    'B': ['?', '3'],
    'c': ['?', '©'],
    'k': ['?'],
    'h': ['?'],
    'a': ['?', '4'],
    'n': ['?'],
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

    setTimeout(() => {

        beginConsoleAnimation();

        setInterval(() => {

            document.title = document.title == "erencelik" ? "0x65726e" : "erencelik";
    
            beginLoopTitleAnimation();
    
        }, 3200);

    }, 2000);

});

function beginConsoleAnimation() {

    let element = document.getElementById("console-input");

    element.innerHTML = "";

    if(!element.classList.contains("typing")) {
        element.classList.add("typing");
    }

    document.getElementById("switcher").innerHTML = "&nbsp;";

    setTimeout(() => {
        element.classList.remove("typing-animation");
        consoleMimicIterateTypeWrite();
    }, 256);

}

function consoleMimicIterateTypeWrite() {

    let element = document.getElementById("console-input");

    if (inputIndex < inputText.length) {

        element.innerHTML += inputText.charAt(inputIndex);

        inputIndex++;

        let writeInterval = getRandomInt(64, 256);

        setTimeout(consoleMimicIterateTypeWrite, writeInterval);

    } else {

        if(element.innerHTML == inputText) {

            inputIndex = 0;

            setTimeout(() => {
                
                element.classList.remove("typing");

                setTimeout(() => {

                    initialAnimationCompleted = true;

                    beginLoopTitleAnimation();

                }, 180);
                
            }, 256);

        }

    }

}

function beginLoopTitleAnimation() {

    const count = getRandomInt(6, 9);

    const interval = getRandomInt(44, 99);
    
    const originalTitle = titles.shift();

    titles.push(originalTitle);

    loopTitles(count, interval, originalTitle);

}

function loopTitles(count, interval, originalTitle) {

    var element = document.getElementById("switcher");

    element.innerHTML = originalTitle;

    for(let i = 0; i <= count; i++) {

        setTimeout(() => {

            if(i == count) {
                
                element.innerHTML = originalTitle;

            } else {
                
                const title = originalTitle;

                var index = getRandomInt(0, title.length);

                var char = title[index];

                let replacements = chars[char];

                const replacement = replacements[getRandomInt(0, replacements.length)];

                element.innerHTML = setCharAt(title, index, replacement);

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