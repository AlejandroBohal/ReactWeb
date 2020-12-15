

//Arreglos en js

const arreglo = [1,2,3,4];

// No es buena idea usar el push ya que se modifica el principal.

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( (numero) => numero*2 ); 
console.log(arreglo2);
console.log(arreglo3);