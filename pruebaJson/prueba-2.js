const table = document.querySelector("#listServices");
const colum2 = document.querySelector(".colum");

async function local() {
  const response = await fetch(
    "http://127.0.0.1:5500/Prueba---Frontend/pruebaJson/datos.json"
  );

  const json = await response.json();
  Object.entries(json.data).forEach((item) => {
    const row0 = document.createElement("tr");
    const cell0 = document.createElement("td");

    /* FIRST COLUMN */
    row0.innerHTML += `
    <td>${item[0]} </td>`;
    table.appendChild(row0);

    /* SECOND COLUMN */
    let mayorLimit = 0;
    let mayorService = "";
    for (let i = 0; i < item[1].length; i++) {
      if (item[1][i].limit > mayorLimit) {
        mayorLimit = item[1][i].limit;
      }
    }
    //console.log(mayorLimit);
    //console.log(Object.keys(json.values.service[mayorLimit]));
    //mayorService = Object.keys(json.values)[mayorLimit].service;
    console.log(Object.keys(json.values));
    let valor = Object.keys(json.values);
    console.log(json.values[1].service);
    for (let i = 0; i < valor[i].length; i++) {
      let valueNew = valor[mayorLimit];
      console.log(valueNew);
    }

    cell0.innerHTML += `
       <td>${valueNew} </td>`;
    row0.appendChild(cell0);
  });
}
local();
