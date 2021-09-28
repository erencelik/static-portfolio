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

let _titles = [
    "@root",
    "whoami",
    "ind1e",
    "void",
    "null",
    "0x636c6b",
    "0x65726e",
    "undefined",
    "mach_trap",
    "segment_failure",
    "unknown",
    "NaN",
    "none",
    "hidden",
    "&!*)!$(!",
    "invalid",
    "failure",
    "kernel_panic",
    "m4dness",
    "chaos",
    "ch4os",
    "err",
    "transient",
    "exception",
    "error"
];

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("DOMContentLoaded", function(event) {

    setInterval(() => {

        document.title = document.title == "erencelik" ? "0x65726e" : "erencelik";

        consoleIterateTyping();

    }, 6000);

});

function consoleIterateTyping() {

    let element = document.getElementById("console-input");

    element.innerHTML = "";

    if(!element.classList.contains("typing")) {
        element.classList.add("typing");
    }

    document.getElementById("switcher").innerHTML = "&nbsp;";

    setTimeout(() => {
        consoleMimicTypeWrite();
    }, 360);

}

var inputIndex = 0;
var inputText = 'whoami';

function consoleMimicTypeWrite() {

    let element = document.getElementById("console-input");

    if (inputIndex < inputText.length) {

        element.innerHTML += inputText.charAt(inputIndex);

        inputIndex++;

        setTimeout(consoleMimicTypeWrite, 128);

    } else {

        if(element.innerHTML == inputText) {

            inputIndex = 0;

            setTimeout(() => {
                
                element.classList.remove("typing");

                setTimeout(() => {

                    let count = getRandomInt(4, 7);

                    let interval = getRandomInt(77, 99);

                    loopTitles(count, interval);

                }, 360);
                
            }, 360);

        }

    }

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