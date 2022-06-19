console.log("Hello World");

const myName = "Youssef Ashraf";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.textContent = myName;
// h1.style.backgrundColor = "red";
// h1.style.backgroundColor = 'red';
// h1.style.padding = "5rem";

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgrundColor = "red";
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;