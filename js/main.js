let titles = [
    {
        key: 1,
        v1: "i0s D3?eLo&3r",
        v2: "iOS Developer"
    },
    {
        key: 2,
        v1: "4nDr0id de?eLo$3r",
        v2: "Android Developer"
    },
    {
        key: 3,
        v1: "b4ck3nd d3Veloper",
        v2: "Backend Developer"
    },
    {
        key: 4,
        v1: "fr0nt3nD deveL0p3R",
        v2: "Frontend Developer"
    },
    {
        key: 5,
        v1: "&I - U? d3veLop3r",
        v2: "UI / UX Developer"
    },
    {
        key: 6,
        v1: "1ndi3 d3ve?oPeR",
        v2: "Indie Developer"
    },
    {
        key: 7,
        v1: "h4c&3r",
        v2: "Hacker"
    },
    {
        key: 8,
        v1: "n0b?dy",
        v2: "Nobody"
    },
    {
        key: 9,
        v1: "v0id",
        v2: "void"
    },
    {
        key: 10,
        v1: "n?L$",
        v2: "null"
    },
    {
        key: 11,
        v1: "virus",
        v2: "tr0jan"
    },
    {
        key: 12,
        v1: "0x65726e",
        v2: "maLw4r3"
    },
    {
        key: 13,
        v1: "undefined",
        v2: "unknown"
    },
    {
        key: 14,
        v1: "NaN",
        v2: "none"
    },
    {
        key: 15,
        v1: "n00b",
        v2: "??????????"
    },
    {
        key: 16,
        v1: "display-none",
        v2: "hidden"
    },
    {
        key: 17,
        v1: "&!*)!$(!",
        v2: "invalid"
    },
    {
        key: 18,
        v1: "failure",
        v2: "kernel_panic"
    }
];

var initialTitle;

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("DOMContentLoaded", function(event) {

    initialTitle = document.getElementById("switcher").innerHTML;

    setInterval(() => {

        document.title = document.title == "erencelik" ? "0x65726e" : "erencelik";

        switchTitle(() => {
            switchTitle(() => {
                switchTitle(() => {
                    switchTitle(null, true);
                });
            });
        });

    }, 6480);

});

function switchTitle(completion, finalize) {

    var element = document.getElementById("switcher");

    var data = titles[Math.floor(Math.random()*titles.length)]

    element.innerHTML = data.v1;

    setTimeout(() => {

        element.innerHTML = data.v2;

        setTimeout(() => {
            
            if(finalize == true) {
                element.innerHTML = initialTitle;
            }

            if(completion != null) {
                completion();
            }

        }, 99);

    }, 99);

}