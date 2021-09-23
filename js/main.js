let titles = [
    "su",
    "@root",
    "r@@t",
    "whoami",
    "ind1e",
    "h4ck3r",
    "n0b?dy",
    "void",
    "null",
    "virus",
    "tr0jan",
    "0x636c6b",
    "0x65726e",
    "maLw4r3",
    "undefined",
    "mach_trap",
    "unknown",
    "NaN",
    "none",
    "??????????",
    "¿¿¿¿¿¿¿¿¿¿",
    "hidden",
    "&!*)!$(!",
    "invalid",
    "failure",
    "kernel_panic",
    "m4dness",
    "chaos",
    "ch4os",
    "transient",
    "exception",
    ">>>>>>>>>>>",
    "<<<<<<<<<<<"
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

    document.getElementById("switcher").style.color = getRandomColor();

    setInterval(() => {

        document.title = document.title == "erencelik" ? "0x65726e" : "erencelik";

        let count = getRandomInt(6, 9);

        let interval = getRandomInt(66, 99);

        loopTitles(count, 100);

    }, 6480);

});

function loopTitles(count, interval) {

    var element = document.getElementById("switcher");

    var copied = [...titles];

    var index = getRandomInt(0, copied.length);

    var title = copied[index];

    copied.splice(index, 1);

    element.innerHTML = title;

    for(let i = 1; i <= count; i++) {

        setTimeout(() => {

            if(i == count) {

                element.innerHTML = initialTitle;

                element.style.color = getRandomColor();

            } else {

                index = getRandomInt(0, copied.length);

                title = copied[index]
                
                copied.splice(index, 1);

                element.innerHTML = title;

            }

        }, interval*i);

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