let a = document.querySelector("#firstNumber");
let b = document.querySelector("#secondNumber");
let buttonResult = document.querySelector("#buttonSummit");

function primeNunmers() {
  for (let a; a <= b; a++) {
    let resultado = 0;
    for (let n = 1; n <= a; n++) {
      if (a % n == 0) {
        resultado++;
      }
      if (resultado == 2) {
        document.write("los números primos son " + a);
      }
    }
  }
}

buttonResult.addEventListener("click", function () {
  primeNunmers();
});
