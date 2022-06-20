const table = document.querySelector("#listServices");
const colum2 = document.querySelector(".colum");

async function local() {
  const response = await fetch(
    "http://127.0.0.1:5500/Prueba---Frontend/pruebaJson/datos.json"
  );
  const json = await response.json();

  /*********** Primera Localidad  ****************/

  let datos = json.data.BUIN[0].limit;
  if (datos >= json.data.BUIN[1].limit) {
    Object.keys(json.values).forEach((i) => {
      const row = document.createElement("tr");
      row.className = "columB";
      row.innerHTML += `
      <td>${datos} ${json.values["1"].service}</td>`;
      table.appendChild(row);
    });
  } else {
    const row = document.createElement("tr");
    row.className = "columB";
    row.innerHTML += `
      <td>${json.data.BUIN[1].limit} ${json.values["15"].service}</td>`;
    table.appendChild(row);
  }

  /************* Segunda Localidad  ****************/

  let datoL = json.data.LAJA[0].limit;
  let datoL1 = json.data.LAJA[1].limit;
  let datoL2 = json.data.LAJA[2].limit;
  if (datoL >= datoL1) {
    const row2 = document.createElement("tr");
    row2.className = "columL";
    row2.innerHTML += `
      <td>${datoL} ${json.values["2"]}</td>`;
    table.appendChild(row2);
  }
  if (datoL2 >= datoL || datoL2 >= datoL1) {
    const row2 = document.createElement("tr");
    row2.className = "columL";
    row2.innerHTML += `
    <td>${datoL2} ${json.values["17"].service}</td>`;
    table.appendChild(row2);
  }
  if (datoL1 >= datoL) {
    const row2 = document.createElement("tr");
    row2.className = "columL";
    row2.innerHTML += `
      <td>${datoL1} ${json.values["2"].service}</td>`;
    table.appendChild(row2);
  }

  /****************** Tercera Localidad  ******************/

  let datoLe = json.data.LEBU[0].limit;
  let datoLe1 = json.data.LEBU[1].limit;
  let datoLe2 = json.data.LEBU[2].limit;
  let datoLe3 = json.data.LEBU[3].limit;

  if (datoLe >= datoLe1 || datoLe >= datoLe2 || datoLe >= datoLe3) {
    const row3 = document.createElement("tr");
    row3.className = "columL";
    row3.innerHTML += `
      <td>${datoLe} ${json.values["1"]}</td>`;
    table.appendChild(row3);
  }
  if (datoLe1 >= datoLe || datoLe1 >= datoLe2 || datoLe1 >= datoLe3) {
    const row3 = document.createElement("tr");
    row3.className = "columL";
    row3.innerHTML += `
    <td>${datoLe1} ${json.values["3"].service}</td>`;
    table.appendChild(row3);
  }
  if (datoLe2 >= datoLe1) {
    const row3 = document.createElement("tr");
    row3.className = "columL";
    row3.innerHTML += `
      <td>${datoLe2} ${json.values["2"].service}</td>`;
    table.appendChild(row3);
  }
  if (datoLe3 >= datoLe1 || datoLe3 >= datoLe2) {
    const row3 = document.createElement("tr");
    row3.className = "columL";
    row3.innerHTML += `
      <td>${datoLe3} ${json.values["16"].service}</td>`;
    table.appendChild(row3);
  }

  /****************** Cuarta Localidad  ******************/

  let datoLo = json.data.LOTA[0].limit;
  let datoLo1 = json.data.LOTA[1].limit;
  let datoLo2 = json.data.LOTA[2].limit;

  if (datoLo >= datoL1) {
    const row3 = document.createElement("tr");
    row4.className = "columL";
    row4.innerHTML += `
      <td>${datoLo} ${json.values["2"]}</td>`;
    table.appendChild(row4);
  }
  if (datoLo1 >= datoLo || datoLo2 >= datoLo1) {
    const row4 = document.createElement("tr");
    row4.className = "columL";
    row4.innerHTML += `
    <td>${datoLo1} ${json.values["16"].service}</td>`;
    table.appendChild(row4);
  }
  if (datoLo2 >= datoLo || datoLo2 >= datoLo1) {
    const row4 = document.createElement("tr");
    row4.className = "columL";
    row4.innerHTML += `
      <td>${datoLo2} ${json.values["17"].service}</td>`;
    table.appendChild(row4);
  }
}
local();

// console.log(json);
//   console.log(json.data.BUIN.limit);
//   console.log(json.values["1"]);
//   console.log(json.values["1"].service);
