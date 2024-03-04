const textoInput = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const encriptarBtn = document.getElementById("encriptar");
const desencriptarBtn = document.getElementById("desencriptar");
const copiarBtn = document.getElementById("copiar");

function encriptar(texto) {
  // Convert the text to lowercase
  texto = texto.toLowerCase();

  // Replace letters with their ASCII code + 3
  let resultadoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let codigo = texto.charCodeAt(i) + 3;
    resultadoEncriptado += String.fromCharCode(codigo);
  }

  return resultadoEncriptado;
}

function desencriptar(texto) {
  // Convert the text to lowercase
  texto = texto.toLowerCase();

  // Replace letters with their ASCII code - 3
  let resultadoDesencriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let codigo = texto.charCodeAt(i) - 3;
    resultadoDesencriptado += String.fromCharCode(codigo);
  }

  return resultadoDesencriptado;
}

encriptarBtn.addEventListener("click", () => {
  const texto = textoInput.value;
  const resultadoEncriptado = encriptar(texto);
  resultado.textContent = resultadoEncriptado;
});

desencriptarBtn.addEventListener("click", () => {
  const texto = textoInput.value;
  const resultadoDesencriptado = desencriptar(texto);
  resultado.textContent = resultadoDesencriptado;
});

copiarBtn.addEventListener("click", () => {
  const texto = resultado.textContent;

  // Check if browser supports Clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("Texto copiado al portapapeles!");
      })
      .catch(() => {
        alert("Falló al copiar el texto. Intente nuevamente.");
      });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("Texto copiado al portapapeles!");
  }
});
