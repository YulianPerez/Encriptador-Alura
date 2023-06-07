function encriptar(){
    let texto = document.getElementById("texto").value;
    let commentTitle = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("secund-img");

    let textoSecreto = texto 
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length !=0) {
        document.getElementById("texto").value = textoSecreto;
        commentTitle.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "./IMG/encriptado.png"
    }else{
        imagen.src = "./IMG/4621080_2431962-removebg-preview.png";
        commentTitle.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que desea Encriptar o Desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar () {
    let texto = document.getElementById("texto").value;
    let commentTitle = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("secund-img");

    let textoSecreto = texto 
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

        if (texto.length !=0) {
            document.getElementById("texto").value = textoSecreto;
            commentTitle.textContent = "Texto desencriptado con éxito";
            parrafo.textContent = "";
            imagen.src = "./IMG/desencriptar.png"
        }else{
            imagen.src = "./IMG/4621080_2431962-removebg-preview.png";
            commentTitle.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingrese el texto que desea Encriptar o Desencriptar";
            alert("Debes ingresar algún texto");
        }
    
}