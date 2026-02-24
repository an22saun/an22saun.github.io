
let a = "hello";
console.log("Hello World!");
alert("Hello World");

const buttonA = document.querySelector('#button_A');
const headingA =document.getElementById("Heading_A");

buttonA.addEventListener('click', function(){
const name = prompt("Wht is your name?");
alert('Hello ${name}, nice to see you!');
headingA.textContent = 'welcome ${name}';
});