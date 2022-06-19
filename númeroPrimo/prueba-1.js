let results = [];
const buttonResult = document.querySelector(".result");

function primeNumbers() {
  let a = parseInt(document.querySelector("#num1").value);
  let b = parseInt(document.querySelector("#num2").value);
  console.log(a);
  console.log(b);

  for (let i = a; a <= b; a++) {
    if (a % 1 == 0 && a % a == 0) {
      results.push(a);
    }
  }
  alert("Los números primos son " + results);
}

buttonResult.addEventListener("click", primeNumbers);
