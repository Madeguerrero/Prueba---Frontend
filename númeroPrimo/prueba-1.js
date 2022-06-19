let results = [];
const buttonResult = document.querySelector(".result");
let a = parseInt(document.querySelector("#num1").value);

function primeNumbers() {
  console.log(a);
  console.log(b);
  for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
      results.push(i);
    }
  }
  alert("Los números primos son " + results);
  console.log(results);
}

buttonResult.addEventListener("click", function () {
  primeNumbers();
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
});
