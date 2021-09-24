let titles = [
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

let colors = [
    "red",
    "green",
    "yellowgreen", 
    "cyan", 
    "teal", 
    "turquoise",
    "orange",
    "gold",
    "yellow"
];

var initialTitle;

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("DOMContentLoaded", function(event) {

    initialTitle = document.getElementById("switcher").innerHTML;

    setInterval(() => {

        document.title = document.title == "erencelik" ? "0x65726e" : "erencelik";

        let count = getRandomInt(3, 9);

        let interval = getRandomInt(66, 99);

        loopTitles(count, interval);

    }, 6480);

});

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

                element.innerHTML = initialTitle;

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

function getRandomColor() {
    return colors[getRandomInt(0, colors.length)];
}