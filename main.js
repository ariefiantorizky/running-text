const text = document.getElementById("text");
const button = document.getElementById("btn-text");
const marquee = document.getElementById("running-text");
const font = document.getElementById("font-change");
const fullscreen = document.getElementById("expand");
const output = document.querySelector(".output");
const rotate = document.getElementById("rotate");
const loading = document.querySelector(".loading");
const closePopup = document.getElementById("close-popup");
const popup = document.querySelector(".pop-up")

// text.oninput = function () {
//     marquee.innerHTML = text.value;


//     console.log(text.value)
// }

// button.onclick = function () {
//     marquee.innerHTML = text.value;

//     text.innerHTML = " ";
// }

button.setAttribute("disabled", "disable");
font.setAttribute("disabled", "disable");



text.oninput = function () {

    if (text.value == "") {
        button.setAttribute("disabled", "disable");
    } else if (text.value.length > 5) {
        font.removeAttribute("disabled");
    } else if (text.value.length < 5) {
        font.setAttribute("disabled", "disable");
    }

}

font.onchange = function () {

    button.removeAttribute("disabled")
    button.addEventListener("click", function () {
        // marquee.classList.add(font.value)
        // marquee.innerHTML = text.value;

        loading.classList.remove("hidden");
        output.classList.add("hidden");

        setTimeout(() => {

            marquee.classList.add(font.value)
            loading.classList.add("hidden");
            output.classList.remove("hidden");
        }, 2000);

        marquee.className = "";
        marquee.innerHTML = text.value;
    })

}

// FULLSCREEN
function getFullScreenElement() {
    return document.fullscreenElement ||
        document.webkitFullScreenElement ||
        document.mozFullScreenElement ||
        document.msFullScreenElement
}

function toggleFullScreen() {
    if (getFullScreenElement()) {
        document.exitFullscreen();
    } else {
        output.requestFullscreen().catch(console.log);
    }
}


fullscreen.addEventListener("click", function () {
    // output.classList.toggle("fullscreen");
    toggleFullScreen();
})

// rotate.addEventListener("click", function () {
//     output.style.transform = `rotate(90deg)`;
// });

let mobileRotate = "rotate";

rotate.addEventListener("click", function () {
    popup.classList.remove("hidden");
})

closePopup.addEventListener("click", function () {
    popup.classList.add("hidden");
})