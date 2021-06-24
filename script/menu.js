const mainMenu = document.querySelector(".mainmenu")
const openMenu = document.querySelector(".openMenu")
const closeMenu = document.querySelector(".closeMenu")

openMenu.addEventListener("click", show)
closeMenu.addEventListener("click", close)

function show(){
    mainMenu.style.top = "0"
    mainMenu.style.display = "flex"
    
}

function close(){
    mainMenu.style.top = "-100%"
}
