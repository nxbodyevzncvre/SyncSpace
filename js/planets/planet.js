const mobile_btn = document.querySelector(".mobile-menu-button")
const mobile_menu = document.querySelector(".navigation-menu")

mobile_btn.addEventListener('click', () =>{
    mobile_menu.classList.toggle("hidden")
})