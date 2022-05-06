//1)
function esPar(numero){
    if(numero%2==0){
        return true;
    }else{
        return false;
    }
}
//2)
function obtenerResto(numero1,numero2){
  
    var cociente=Math.floor(numero1/numero2);
    var resto=numero1-cociente*numero2;
    return resto;

}
//3)
function imprimirSimbolo(cantidad){
    var simbolo="#";
    for(var i=0;i<cantidad;i++){
        console.log(simbolo);
        simbolo+="#";
    }
}
//4)
function esVocal(caracter){
    var vocales="aeiouAEIOU";
    if(vocales.indexOf(caracter)!=-1){
        return true;
    }
    else{
        return false;
    }
}
//5)

function mostrarSucesion(a,b){
    for(var i=a;i<=b;i++){
        console.log(i);
    }
}

//6) 
function esMultiplo(numero1,numero2){
    if(numero1%numero2==0){
        return true;
    }
    else{
        return false;
    }
}

//7) 
function cantDivisores(numero){
    var contador=0;
    for(var i=1;i<=numero;i++){
        if(numero%i==0){
            contador++;
        }
    }
    return contador;
}
//8) 
function esPrimo(numero){
    var contador=0;
    for(var i=1;i<=numero;i++){
        if(numero%i==0){
            contador++;
        }
    }
    if(contador==2){
        return true;
    }
    else{
        return false;
    }
}
//9) 
function mostrarNPrimos(n){
    var contador=0;
    var i=1;
    while(contador<n){
        if(esPrimo(i)){
            console.log(i);
            contador++;
        }
        i++;
    }
}

//10) 
function esNumeroPerfecto(numero){
    var suma=0;
    for(var i=1;i<numero;i++){
        if(numero%i==0){
            suma+=i;
        }
    }
    if(suma==numero){
        return true;
    }
    else{
        return false;
    }
}

/*
11) 

*/
function calcularSueldo(valorUnitario,cantidad){
    
    var valorUnitario=parseInt(prompt("Ingrese el valor unitario del articulo"));
    var cantidad=parseInt(prompt("Ingrese la cantidad de articulos vendidos"));
    //calcula el monto total
    var montoTotal=valorUnitario*cantidad;
    //calcula el sueldo
    var sueldo=montoTotal*0.16+14000;
    //muestra el sueldo
    console.log("El sueldo del vendedor es: "+sueldo);

}

//12)
function jubilarse(edad,genero){
    var edad=parseInt(prompt("Ingrese su edad"));
    var genero=prompt("Ingrese su genero");
    if(genero=="F" && edad>=65){
        console.log("Usted esta en edad de jubilarse");
    }
    else if(genero=="M" && edad>=65){
        console.log("Usted esta en edad de jubilarse");
    }
    else{
        console.log("Usted no esta en edad de jubilarse");
    }
}

//13)

function calcularTicket(cantidad,precioUnitario){
    var cantidad=parseInt(prompt("Ingrese la cantidad de productos"));
    var precioUnitario=parseInt(prompt("Ingrese el precio unitario del producto"));
    var contador=0;
    var montoTotal=0;
    while(contador<cantidad){
        var respuesta=prompt("¿Deseas ingresar otro producto? [S/N]");
        if(respuesta=="S"){
            var cantidad=parseInt(prompt("Ingrese la cantidad de productos"));
            var precioUnitario=parseInt(prompt("Ingrese el precio unitario del producto"));
            montoTotal+=cantidad*precioUnitario;
            contador++;
        }
        else{
            montoTotal+=cantidad*precioUnitario;
            console.log("El monto total del ticket es: "+montoTotal);
            break;
        }
    }
}
