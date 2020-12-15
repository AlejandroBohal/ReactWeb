
const activo = true;

/*
let mensaje = '';
if ( activo ){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}*/
const mensaje = activo ? 'Activo' : 'Inactivo';
console.log(mensaje);

/*
if ( activo ){
    mensaje = 'Activo';
}
*/
const mensaje2 = activo && 'Activo2';
console.log(mensaje2);
