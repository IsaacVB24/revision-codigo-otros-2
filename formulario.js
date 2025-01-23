// Se corrige el nombre del id
const formulario = document.querySelector(".formulario");
// *** Se añaden ';' a las líneas que les hacen falta

formulario.onsubmit = function(event) {
  // Se completa la función
  event.preventDefault();
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  // Se limpian campos tras dar clic al botón
  n.value = '';
  e.value= '';
  var nacionalidad = na.options[i].value;
  //console.log(nombre, edad);
  //console.log(nacionalidad);

  // Se limpian los campos quitando la clase error por si esta existiera
  n.classList.remove('error');
  e.classList.remove('error');
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
    alert('Debes de ser mayor de edad y no presumir que tienes más de 120 años.');
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

// Se elimina código que añadía un botón de eliminar invitado, aún si no hay

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  // Se corrige el método para añadir una clase al elemento
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre ;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  }
}