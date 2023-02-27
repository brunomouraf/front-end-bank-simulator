
function trocaImagem(){
    const inputFile = document.getElementById("input-foto")
    console.log(inputFile)
    const pictureImage = document.querySelector(".perfil")
    console.log(pictureImage)


    inputFile.addEventListener("change", function (e){
        const inputTarget = e.target
        const file = inputTarget.files[0]

        if(file){
            const reader = new FileReader()
            reader.addEventListener('load', function (e){
                const readerTarget = e.target

                const img = document.createElement('img')
                img.src = readerTarget.result
                img.classList.add('image-perfil')
                pictureImage.innerHTML = ''

                pictureImage.appendChild(img)
            })

            reader.readAsDataURL(file);
        }
    })
}

let base64String = "";

function imageUploaded() {
    var file = document.querySelector(
        'input[type=file]')['files'][0];

    var reader = new FileReader();

    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");

        //imageBase64Stringsep = base64String;

        alert(base64String);
        salvaFoto(base64String)
    }
    reader.readAsDataURL(file);
}

function salvaFoto(base64String) {
    event.preventDefault()
    let url = "http://localhost:8080/after/salvar-foto"
    var email = sessionStorage.getItem("email")
    console.log(email)
    console.log(base64String)

    body = {
        "email": email,
        "fotoPerfil": base64String
    }

    fazPostFoto(url, body)
}

function fazPostFoto(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))



    request.onload = function(){

        if (request.status === 200){
            const obj = JSON.parse(request.responseText);
            trocaImagem()
            //window.location.href = "home.html"

        }else alert("Deu ruim")

    }

    return request.responseType
}