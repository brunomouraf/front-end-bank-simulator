function fazPostCadastro(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))



    request.onload = function(){

        if (request.status === 201){
            alert("Cadastrado com sucesso!")
            window.location.href = "index.html"

        }else alert("Deu ruim")

    }

    return request.responseType
}

function fazCadastro() {
    event.preventDefault()
    let url = "http://localhost:8080/after/registrar"
    let nomeCompleto = document.getElementById("nome-form").value
    let senha = document.getElementById("senha-form").value
    let email = document.getElementById("email-form").value
    let telefone = document.getElementById("telefone-form").value
    let dataNascimento = document.getElementById("data-nascimento-form").value
    let cpf = document.getElementById("cpf-form").value

    body = {
        "nomeCompleto": nomeCompleto,
        "senha": senha,
        "email": email,
        "telefone": telefone,
        "dataNascimento": dataNascimento,
        "cpf": cpf
    }

    fazPostCadastro(url, body)
}