/*
programa contenedor de las definiciones requeridas de todas las tareas
 */
const html = document.getElementById("app");
const definicionesArray = [
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
const descripcionresArray = [
  "Una variable es un contenedor en el que se almacenan datos. Estos datos pueden ir variando durante la ejecución de un programa, de ahí el nombre variables",
  "Las Strings son frases de caracteres (los caracteres son las letras de un computador. como un abcdario ampliado), aunque con que tenga un solo caracter ya basta para ser una String.",
  "Las funciones son listas de instrucciones que necesitan ser invocadas para ser ejecutadas. Los argumentos son datos que se le pueden entregar a la función para que esta trabaje con ellos. la instrucción return es la encargada de que los datos resultados de la función sean devueltos o retornados como lo dice su nombre.",
  "Las declaraciones 'if' son como su nombre lo dice condicionales. Es decir antes de ser ejecutadas las intrucciones dentro de una condicional, se tienen que cumplir ciertas condiciones (de ahí su nombre 'if'), si estás condiciones no se dan, se puede dar otra instrucción ocupando else. en español sería si(if) es que pasa esto haz esto, si(else) es que no haz esto otro",
  "Los valores booleanos son afirmaciones que solo pueden ser verdaderas o falsas. Es decir el resultado de estos valores es binario siendo 1 true y 0 false.",
  "la palabra 'for' en javascript describe un tipo de loop, un loop en donde el computador repite una actividad un número i veces.",
  "los operadores lógicos conocidos como '&&' = and; '||' = or; '!' = negación; son utilizados para evaluar datos, por ejemplo si quiero que algo cumpla con más de una condición puede utilizar &&, o una condición u otra utilizo ||, finalmente si quiero decir que algo no es igual utilizo !=.",
  "las arrays son listas. Una lista de datos, y en javascript se pueden mezclar tipos de datos, puedo tener una lista de strings, una de integers, una lista de listas o una lista mezclada de todos los tipos, las listas son muy versatiles y utilizadas en JS",
  "Los objetos son parecidos a las listas, solo que en un objeto cada valor de la lista está pareado a una llave (key) con el que podrás acceder a ese valor, los arrays también tienen llaves para acceder a sus valores, pero no son asignables, son números fijos, un objeto se tienen que definir las llaves",
  "Las propiedades de un objeto son los valores asociados al mismo, es decir si un objeto tiene un valor juan, dentro de la llave nombre, yo puedo llamar a ese valor mencionando la propiedad nombre luego del nombre del objeto, se hace a través de un punto o con brackets []",
  "Los Métodos, son funciones que existen dentro de un objeto, que se pueden invocar a través del mismo objeto al igual que una función.",
  "el bucle 'for...in' es un loop igual que for, pero que itera en todos los elementos de una array u objeto sin tener que definir el número de veces. ",
  "hay dos formas de acceder a las propiedades de un objeto una es con la notación '.' y la otra notación '[]', a pesar de que se utiliza más la notación punto '.' porque es más fácil para leer y simple. La notación con brackets es más versátil, permitiendo utilizar espacios en las strings o empezar una con número una llave",
  "los propotypes son objetos que les heredan sus propiedades y métodos a una clase de objetos. Por ejemplo los array son objetos y aunque cuando yo defino una array no le doy ningún método, el prototipo array contiene en sí varios métodos, como por ejemplo el método length que te da la cantidad de elementos que tiene una array. El metodo length viene dentro del prototipo de las array",
  "los constructores de clases son creadores de objetos. es el plano con el que se creará una misma clase de objetos una y otra vez.",
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
