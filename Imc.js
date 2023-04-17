
function calcular (){

let peso = prompt("ingesa tu peso")
let altura = prompt("ingresa tu altura")
 let imc = peso / (altura * altura)

if(imc < 18.5){
    alert("bajo de peso");
} else if( imc >=18.5 && imc <= 24.9){
    alert("adecuado");
}else if (imc >= 25.0 && imc <= 29.9 ){
    alert("obesidad grado 1");
}else if (imc >=30.0 && imc <= 34.9){
    alert("obesidad grado 2");
}else if (imc >= 35.0 && imc <= 39.9){
    alert("obesidad grado 2");
}else if (imc > 40){
    alert ("obesidad grado 3");
}else{
    alert("ingrese los datos de peso y altura");
}

}


