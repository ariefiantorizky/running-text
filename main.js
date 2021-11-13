const text = document.getElementById("text");
const button = document.getElementById("btn-text");
const marquee = document.getElementById("running-text");
const font = document.getElementById("font-change");
const fullscreen = document.getElementById("expand");
const output = document.querySelector(".output");
const rotate = document.getElementById("rotate");
const loading = document.querySelector(".loading")

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

    if (text.value.length > 5) {
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

fullscreen.addEventListener("click", function () {
    output.classList.toggle("fullscreen")
})

// rotate.addEventListener("click", function () {
//     output.style.transform = `rotate(90deg)`;
// });

let mobileRotate = "rotate";

rotate.addEventListener("click", function () {
    if (mobileRotate == "no-rotate") {
        output.style.transform = `rotate(0deg)`;
        mobileRotate = "rotate";
    } else if (mobileRotate == "rotate") {
        output.style.transform = `rotate(90deg)`;
        mobileRotate = "no-rotate";
    }
})