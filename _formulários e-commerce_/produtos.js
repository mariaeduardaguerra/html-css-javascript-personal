// criar um objeto que receba as informações vindas do formulário
var cadastroProdutos = { name: "Maria Eduarda", description: "Guerra", price: "R$ 890.90" }
console.log(cadastroProdutos)

// trocar ou adicionar conteúdo da tag LABEL usando o innerHTML do JavaScript
document.getElementsByTagName("label")[0].innerHTML = "Nome Produto"
console.log(cadastroProdutos)

// colocar os placeholders necessários pelo JavaScript
document.getElementById("name").placeholder = "Guitarra Elétrica..."
document.getElementById("description").placeholder = "Guitarra Elétrica Muriel's, Preta - GTBM1954"
document.getElementById("price").placeholder = "R$ 890.90..."
console.log(cadastroProdutos)

// formatar a input de um dos seus formulários utilizando o JavaScript
document.getElementById("name").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("description").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("price").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("category").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("img").style.boxShadow = "1px 1px 6px #0000001c"
document.getElementById("name").style.borderRadius = "10px"
document.getElementById("description").style.borderRadius = "10px"
document.getElementById("price").style.borderRadius = "10px"
document.getElementById("category").style.borderRadius = "10px"
document.getElementById("img").style.borderRadius = "10px"
document.getElementById("name").style.height = "1.5rem"
document.getElementById("description").style.height = "1.5rem"
document.getElementById("price").style.height = "1.5rem"
document.getElementById("category").style.height = "1.5rem"
document.getElementById("img").style.height = "1.5rem"
console.log(cadastroProdutos)

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
