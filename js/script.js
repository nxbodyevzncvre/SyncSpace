import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const mobile_btn = document.querySelector(".mobile-menu-button")
const mobile_menu = document.querySelector(".navigation-menu")
const paragraph = document.querySelector(".paragraph")
const paragraph2 = document.querySelector(".paragraph2")
const toggler1 = document.querySelector("#data-menu")
const toggler2 = document.querySelector("#data-menu2")
const sender = document.querySelector("#sender")


const swiper = new Swiper(".swiper", {
    loop: true,
    parallax: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

})


mobile_btn.addEventListener('click', () =>{
    mobile_menu.classList.toggle("hidden")
})
toggler1.addEventListener("click", () =>{
    paragraph.classList.toggle("hidden")
    toggler1.classList.toggle("rotate-180")
})
toggler2.addEventListener("click", () =>{
    paragraph2.classList.toggle("hidden")
    toggler2.classList.toggle("rotate-180")
})

var vid = document.getElementById("vid");
vid.addEventListener("timeupdate", function () {
    if(this.currentTime >= 5.0) {
        this.currentTime = 0.0;
    }
});







console.log(12345)
