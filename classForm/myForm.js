
let a = "hello";
console.log("Hello World!");
alert("Hello World");

//slide 11
const buttonA = document.querySelector('#button_A');
const headingA =document.getElementById("Heading_A");

buttonA.addEventListener('click', function(){
const name = prompt("What is your name?");
alert(`Hello ${name}, nice to see you!`);
headingA.textContent = 'Welcome ${name}';
});

//slide 14
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
    output.textContent = `You pressed "${event.key}".`;
});

//slide 20
const button = document.querySelector("button");
function greet(){
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}
button.addEventListener("click", greet);