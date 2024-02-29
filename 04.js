/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  let numStr = String(num);
  for (let i=0;i<Math.floor(numStr.length/2);i++) {
    if (numStr[i] !== numStr[numStr.length-1-i]) return false;
  }
  return true;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico


 // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true.