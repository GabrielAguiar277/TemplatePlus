const eMail = document.querySelector(".e-mail")
const senha = document.querySelector(".senha")


senha.addEventListener("keyup", verificaForm)
eMail.addEventListener("keyup", verificaForm)


function verificaForm(){

    var loginButton = document.querySelector(".login_submit")

    if(eMail.value != "" && senha.value != ""){
        loginButton.classList.add("valida-ground")
    }
    else{
        loginButton.classList.remove("valida-ground")
    }
}
