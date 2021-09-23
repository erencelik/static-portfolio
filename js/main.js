let titles = [
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
     "????????",
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
     "unevictable"
];

var initialTitle;

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("DOMContentLoaded", function(event) {

    initialTitle = document.getElementById("switcher").innerHTML;

    setInterval(() => {

        document.title = document.title == "erencelik" ? "0x65726e" : "erencelik";

        let count = getRandomInt(4, 8);

        let interval = getRandomInt(44, 88);

        loopTitles(count, interval);

    }, 6000);

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