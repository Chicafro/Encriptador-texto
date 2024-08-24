const tituloDos = "Ningún mensaje fue encontrado";
const parrafoDos = "Ingresa el texto que deseas encriptar o desencriptar";

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("mensaje__encriptado__dos");
    let parrafoMensaje = document.getElementById("parrafo__encriptado__dos");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("mensaje").value = textoCifrado;
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("muñeco").style.visibility = "hidden";
        document.getElementById("boton__copiar").style.display = "block";
        document.getElementById("texto").value = "";
        tituloMensaje.textContent = "";
        parrafoMensaje.textContent = "";
    } else {
        document.getElementById("mensaje").style.display = "none";
        //muñeco.src = "assets/Muñeco.png";
        tituloMensaje.textContent = tituloDos;
        parrafoMensaje.textContent = parrafoDos;
        Swal.fire("¡Lo sentimos!", "Debes ingresar un texto", "warning");
    }
}

//Funcion desencriptar texto
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("mensaje").value = textoCifrado;
        document.getElementById("texto").value = "";


    } else {
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function accionCopiar() {
    let mensajeCopiado = document.getElementById("mensaje");
    let button = document.getElementById("boton__copiar");
    mensajeCopiado.select();
    document.execCommand('copy');
    // button.textContent = "Mensaje Copiado";

    Swal.fire({
        title: "Texto copiado con éxito al porta papeles.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
    });
}

