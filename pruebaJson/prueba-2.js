async function local() {
  const response = await fetch(
    "http://127.0.0.1:5500/Prueba---Frontend/pruebaJson/datos.json"
  );
  const json = await response.json();
  console.log(json);
  console.log(json.data.BUIN);
  console.log(json.data["LAJA"]);
  console.log(json.values["1"]);
  Object.keys(data).forEach((key) => {
    console.log(key["limit"]);
  });
}
local();

// const table = document.querySelector("#listServices");
// function localidades() {
//   console.log(fetch("datos.json"));
//   //.then((respuesta) => respuesta.json());
//   // table.innerHTML = json.data;
//   // console.log(respuesta);
// }
// localidades();

// const table = document.querySelector("#listServices");

// function localidades() {
//   fetch("datos.json")
//     .then((respuesta) => respuesta.json())
//     .then((respuesta) => {
//       respuesta.forEach(function (service) {
//         console.log(service);
//         //=> {
//         //   const row = document.createElement("tr");
//         //   row.innerHTML += `
//         //     <td>${service[1]}</td>`;
//         //   table.appendChild(row);
//         // });
//       });
//     });
// }

// localidades();
//import { filterLimit } from "../pruebaJson/data.js";
// const table = document.querySelector("#listServices");

//const localidades = document.querySelector("#firstTable");

// let paintLocation = (location) => {
//   for (let i = 0; i < location.length; i++) {
//     const row = document.createElement("tr");
//     row.innerHTML += `
//                  <td>${json.data}</td>`;
//     table.appendChild(row);
//   }
// };
// function localidades() {
//   fetch("datos.json").then((respuesta) => respuesta.json());
//   console.log(localidades);
// }
