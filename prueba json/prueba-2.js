function localidades() {
  fetch("datos.json")
    .then((respuesta) => respuesta.json())
    .then((respuesta) => console.log(respuesta));
}
localidades();
