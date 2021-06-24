const emailForm = document.querySelector(".email-form")
const number = document.querySelector(".number")

emailForm.addEventListener("click", mostraEmail)

number.addEventListener("click", mostraNumber)

function mostraEmail(){
    const formAtendimento = document.querySelector(".form-atendimento-email")

    formAtendimento.style.left = "0"

    const number = document.querySelector(".form-atendimento-telefone")

    number.style.left = "-100%"
}

function mostraNumber(){
    const formAtendimento = document.querySelector(".form-atendimento-email")

    formAtendimento.style.left = "-100%"

    const number = document.querySelector(".form-atendimento-telefone")

    number.style.left = "0"
}
