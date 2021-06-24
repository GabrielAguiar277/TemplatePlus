window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    const text = document.querySelector(".mainmenu")
    const defocus = document.querySelector(".banner")


    header.classList.toggle("change", window.scrollY > 0)
    text.classList.toggle("changeText", window.scrollY > 0)
    defocus.classList.toggle("defocus", window.scrollY > 0)

})
