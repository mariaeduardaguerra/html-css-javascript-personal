// criar um objeto que receba as informações vindas do formulário
var cadastro = { name: "Maria Eduarda", surname: "Guerra", email: "maria@maria.com.br", cel: "(31) 99178-9948", password: "maria", confirmPassword: "maria" }
console.log(cadastro)

// trocar ou adicionar conteúdo da tag LABEL usando o innerHTML do JavaScript
document.getElementsByTagName("label")[0].innerHTML = "Nome"
console.log(cadastro)

// colocar os placeholders necessários pelo JavaScript
document.getElementById("firstname").placeholder = "Digite seu Primeiro Nome..."
document.getElementById("lastname").placeholder = "Digite seu Sobrenome..."
document.getElementById("email").placeholder = "Digite seu e-mail..."
document.getElementById("number").placeholder = "(xx) xxxx-xxxx"
document.getElementById("password").placeholder = "Digite sua senha..."
document.getElementById("confirmPassword").placeholder = "Digite sua senha novamente..."
console.log(cadastro)

// formatar a input de um dos seus formulários utilizando o JavaScript
document.getElementById("firstname").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("lastname").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("email").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("number").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("password").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("confirmPassword").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("firstname").style.fontWeight = "500"
document.getElementById("lastname").style.fontWeight = "500"
document.getElementById("email").style.fontWeight = "500"
document.getElementById("number").style.fontWeight = "500"
document.getElementById("password").style.fontWeight = "500"
document.getElementById("confirmPassword").style.fontWeight = "500"
console.log(cadastro)

function mascara_celular() {
    // limitador
    var celular = document.getElementById("number").value
    console.log(celular)
    celular = celular.slice(0, 14) // pode limitar a quantidade de 'char' na entrada pelo java script
    console.log(celular)
    document.getElementById("number").value = celular
    celular = document.getElementById("number").value.slice(0, 10)
    console.log(celular)

    // máscara
    var celular_final = document.getElementById("number").value
    if (celular_final[12] != "(") {
        if (celular_final[12] != undefined) {
            document.getElementById("number").value = "(" + celular_final[12];
        }
    }

    if (celular_final[12] != ")") {
        if (celular_final[12] != undefined) {
            document.getElementById("number").value = celular_final.slice(0, 3) + ")" + celular_final[12]
        }
    }

    if (celular_final[12] != "-") {
        if (celular_final[12] != undefined) {
            document.getElementById("number").value = celular_final.slice(0, 9) + "-" + celular_final[12]
        }
    }
}

