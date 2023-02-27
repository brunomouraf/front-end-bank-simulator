function fazPost(url, body, email) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))



    request.onload = function(){

        if (request.status === 200){
            const obj = JSON.parse(request.responseText);
            sessionStorage.setItem("nomeCompleto", obj.nomeCompleto)
            sessionStorage.setItem("saldo", obj.saldo)
            sessionStorage.setItem("email", email)

            window.location.href = "home.html"

        }else alert("Deu ruim")

    }

    return request.responseType
}

function fazLogin() {
    event.preventDefault()
    let url = "http://localhost:8080/after/login"
    let email = document.getElementById("email-form-login").value
    let senha = document.getElementById("senha-form-login").value
    console.log(email)
    console.log(senha)

    body = {
        "email": email,
        "senha": senha
    }

    fazPost(url, body, email)
}
