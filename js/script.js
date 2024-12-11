import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// Swiper initialization
const swiper = new Swiper(".swiper", {
    loop: true,
    parallax: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Toggle mobile menu
const mobile_btn = document.querySelector(".mobile-menu-button");
const mobile_menu = document.querySelector(".navigation-menu");

mobile_btn.addEventListener('click', () => {
    mobile_menu.classList.toggle("hidden");
});

// Toggle paragraphs
const paragraph = document.querySelector(".paragraph");
const toggler1 = document.querySelector("#data-menu");
const paragraph2 = document.querySelector(".paragraph2")
const toggler2 = document.querySelector("#data-menu2")

toggler1.addEventListener("click", () => {
    paragraph.classList.toggle("hidden");
    // toggler1.classList.toggle("rotate-180");
});
toggler2.addEventListener("click", () =>{
    paragraph2.classList.toggle("hidden");
})

// Video loop reset
var vid = document.querySelector("#vid");
vid.addEventListener("timeupdate", function () {
    if (this.currentTime >= 5.0) {
        this.currentTime = 0.0;
    }
});




const validateForm = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const consent = document.getElementById("privacy-consent");

    if (name === "") {
        alert("Enter your name.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Enter valid email.");
        return false;
    }
    if (message === "") {
        alert("Enter your message");
        return false;
    }
    if (!consent.checked) {
        alert("You must be agreed with our rules");
        return false;
    }
    alert("Your info was sent to our Database");
    window.location.href = "../thanks.html"
    return true
    
}

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


const form = document.getElementById("contact-form");
form.addEventListener("submit", validateForm);