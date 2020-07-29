/*
programa contenedor de las definiciones requeridas de todas las tareas
 */
const html = document.getElementById("app");
let definicionesArray = [
  "Variables",
  "Strings",
  "Funciones (argumentos, `return`)",
  "Declaraciones `if`",
  "Valores booleanos (`true`, `false`)",
  "`for`",
  "`&&`, `||`, `!`",
  "Arrays",
  "Objetos",
  "Propiedades",
  "Métodos",
  "Bucle `for…in`",
  "Notación de puntos vs notación de corchetes",
  "`prototype`",
  "_Constructors_ (de Clases)",
];
let color;
const hexCode = "cdef";
let hexCodeLen = hexCode.length;
let defArrLen = definicionesArray.length;
creategrid();
let htmlDivs = Array.from(document.querySelectorAll(".definiciones"));
writeInDivs();
bkcolor();

function bkcolor() {
  hexGenerator();
  html.style.backgroundColor = color;
}
function creategrid() {
  for (let i = 0; i < defArrLen; i++) {
    let div = document.createElement("div");
    div.className = "definiciones";
    div.id = definicionesArray[i];
    hexGenerator();
    div.style.backgroundColor = color;
    html.appendChild(div);
  }
}
function writeInDivs() {
  for (let i = 0; i < defArrLen; i++) {
    let divs = htmlDivs[i];
    let h2 = document.createElement("h2");
    h2.className = "titulos";
    h2.innerText = definicionesArray[i];
    divs.appendChild(h2);
  }
}
function hexGenerator() {
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * hexCodeLen)];
  }
  return color;
}
function addClickE() {
  for (let i = 0; i < defArrLen; i++) {
    let current = htmlDivs[i];
    current.addEventListener("click");
  }
}
