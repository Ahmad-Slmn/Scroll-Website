let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let ahmed = document.querySelector(".main h3")

document.querySelector(".bars").onclick = function () {

    document.querySelector("header nav").classList.toggle("hidemenu")
}

let links = document.querySelectorAll("nav ul li a");

links.forEach(function (e) {

    e.onclick = function (el) {

        el.preventDefault();

        document.querySelector("header nav").classList.toggle("hidemenu")
    }
})

window.onscroll = function () {

    let value = scrollY;

    stars.style.left = value + "px";

    moon.style.top = value * 4 + "px";

    mountains3.style.top = value * 2 + "px";

    mountains4.style.top = value * 1.5 + "px";

    river.style.top = value + "px";

    boat.style.top = value + "px";

    boat.style.left = value * 3 + "px";

    ahmed.style.fontSize = value - 50 + "px";

    if (scrollY >= 96) {

        ahmed.style.fontSize = 40 + "px";

        ahmed.style.position = "fixed";

        if (window.scrollY >= 434) {

            ahmed.style.display = "none";

        } else {

            ahmed.style.display = "block";
        }

        if (scrollY >= 124) {

            document.querySelector(".main").style.background = "linear-gradient(#376281, #10001f)"
        } else {

            document.querySelector(".main").style.background = "linear-gradient(#200016, transparent)"
        }
    }
}
