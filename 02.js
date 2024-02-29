/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
 // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
  // Tu código aca
function stringMasLarga(strings) {
  let longestString = '';
  
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }
  
  return longestString;
}

// Ejemplos de uso
console.log(stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag'])); // 'guten tag'
console.log(stringMasLarga(['JavaScript', 'HTML', 'CSS'])); // 'JavaScript'



// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga