let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})


AOS.init();


const close = document.querySelector(".iconclose")
const open = document.querySelector(".menub")
const vadi = document.querySelector(".menu")

open.addEventListener("click" , () => {
    vadi.style.transform = "scale(1)"
})

close.addEventListener("click" , () => {
    vadi.style.transform = "scale(0)"
})