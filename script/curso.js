const log = document.querySelector(".log")
const html = document.querySelector(".html")
const ling = document.querySelector(".ling")

 log.addEventListener("click", callForm)
 html.addEventListener("click", callForm)
 ling.addEventListener("click", callForm)

 function callForm(){
    const loginActived = document.querySelector(".login-active")
    const loginForm = document.querySelector(".login_form")
    loginActived.classList.add("login-actived")

    loginForm.style.display = "flex"

    loginActived.addEventListener("click", function(){
        this.classList.remove("login-actived") 
        loginForm.style.display = "none"
        eMail.value = ""
        senha.value = ""
 })
 }
