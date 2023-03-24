function checkDivisibility(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const input = numbers[i];

    if (isNaN(input)) {
      console.log(`${input} n'est pas un nombre`);
    } else if (!Number.isInteger(Number(input))) {
      console.log(`${input} n'est pas un nombre entier`);
    } else if (input < -1000 || input > 1000) {
      console.log(`${input} n'est pas compris entre -1000 et 1000`);
    } else if (input % 3 === 0 && input % 5 === 0) {
      console.log(`GestForm`);
    } else if (input % 3 === 0) {
      console.log(`Geste`);
    } else if (input % 5 === 0) {
      console.log(`Forme`);
    } else {
      console.log(`${input}`);
    }
  }
}

const numbers = [33, 7, 15, "GestFOrm", 82, 90, -823, 309, 49.3, 1600, -2000];
checkDivisibility(numbers);
