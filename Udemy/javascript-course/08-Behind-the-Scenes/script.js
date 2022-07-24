'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Yassen';
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // add(2, 3);

    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Youssef';
calcAge(1992);
