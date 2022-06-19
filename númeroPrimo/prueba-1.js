let lowerNumber = parseInt(document.querySelector("#num1").value);
let higherNumber = parseInt(document.querySelector("#num2").value);
let results = [];
const buttonResult = document.querySelector(".result");

function primeNumbers() {
  for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      results.push(i);
    }
  }
  alert(
    `The prime numbers between ${lowerNumber} and ${higherNumber} are:` +
      results
  );
}
buttonResult.addEventListener("click", primeNumbers);
