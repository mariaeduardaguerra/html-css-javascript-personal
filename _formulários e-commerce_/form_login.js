// criar um objeto que receba as informações vindas do formulário
var user = { email: "maria@maria.com.br", password: "maria" }
console.log(user)

// trocar ou adicionar conteúdo da tag LABEL usando o innerHTML do JavaScript
document.getElementsByTagName("label")[0].innerHTML = "E-mail"
console.log(user)

// colocar os placeholders necessários pelo JavaScript
document.getElementById("username").placeholder = "Seu usuário..."
document.getElementById("password").placeholder = "Sua senha..."
console.log(user)

// formatar a input de um dos seus formulários utilizando o JavaScript
document.getElementById("username").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("password").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("username").style.borderRadius = "5px"
document.getElementById("password").style.borderRadius = "5px"
document.getElementById("username").style.height = "1.5rem"
document.getElementById("password").style.height = "1.5rem"
console.log(user)