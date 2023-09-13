function mostrarMensajeBienvenida() {
  const nombre = prompt("Por favor, ingresa tu nombre:");
  if (nombre) {
    const mensaje = document.createElement("p");
    mensaje.textContent = `¡Hola ${nombre}! Bienvenido a mi página web.`;
    mensaje.style.fontSize = "20px";
    mensaje.style.marginTop = "20px";
    document.body.appendChild(mensaje);
  }
}


function cambiarColorFondo() {
  const colores = ["#686A4E", "#CFCDC2", "#977557", "#757573", "#FFFFFF"];
  const indiceColor = Math.floor(Math.random() * colores.length);
  document.body.style.backgroundColor = colores[indiceColor];
}

function moveUp(index) {
  if (index > 0) {
    const list = document.getElementById("countryList");
    const listItem = list.children[index];
    list.insertBefore(listItem, list.children[index - 1]);
  }
}

function moveUp(index) {
  var list = document.getElementById("countryList");
  var item = list.getElementsByTagName("li")[index];
  if (index > 0) {
    list.insertBefore(item, list.getElementsByTagName("li")[index - 1]);
  }
}

function moveDown(index) {
  var list = document.getElementById("countryList");
  var item = list.getElementsByTagName("li")[index];
  if (index < list.children.length - 1) {
    list.insertBefore(item, list.getElementsByTagName("li")[index + 2]);
  }
}
