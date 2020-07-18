// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'null';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  let a = str
  return a
  // "Return" la string provista: str
  // Tu código:
}

function suma(x, y) {
  let sum = x + y
  return sum
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
}

function resta(x, y) {
  let res = x - y 
  return res
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
}

function multiplica(x, y) {
  let mul = x * y
  return mul
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
}

function divide(x, y) {
  let div = x / y
  return div
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
}

function sonIguales(x, y) {
  if (x === y){
    return true
  } 
  return false;
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length){
    return true
  }
  return false;
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num < 90){
    return true
  }
  return false;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    return true
  }
  return false;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resto = x % y
  return resto
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0){
    return true
  }
  return false
}

function esImpar(num) {
  if (num % 2 === 1){
    return true
  }
  return false;
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}

function elevarAlCuadrado(num) {

  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let cuadrado = num ** 2
  return cuadrado
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
let cubo = num ** 3
return cubo
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let ele = num ** exponent
  return ele
}

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
  
  if (num === 0) {
    let redondoup = Math.floor(num) + 1;
    return redondoup;
  } else {
    let redondoup = Math.round(num);
    return redondoup;
  }
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  if (num === 0.1 || num === 0.2 || num === 0.3 || num === 0.4) {
    let redondoup = Math.round(num) + 1;
    return redondoup;
  } else {
    let redondoup = Math.round(num);
    return redondoup;
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let hello = str + "!"
  return hello
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let fullname = nombre + " " + apellido
  return fullname
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let saludo = "Hola " + nombre + "!"
  return saludo
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  let area = alto * ancho
  return area
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
