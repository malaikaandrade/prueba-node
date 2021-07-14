console.log("Hola mundo");
function ejercicioClase(callback1, callback2, callback3){
    callback1();
    callback2();
    callback3();
}

function gatito(){
    console.log('soy un gatito');
}
function perrito(){
    console.log('soy un perrito');
}
function monito(){
    console.log('soy un monito');
}
ejercicioClase(gatito, perrito, monito);

