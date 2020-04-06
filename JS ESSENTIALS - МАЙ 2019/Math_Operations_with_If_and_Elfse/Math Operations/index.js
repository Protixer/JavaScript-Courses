function operacion(arg1,arg2,arg3){
    let num1 = +arg1;
    let num2 = +arg2;
    let operacion = arg3;

    if(operacion === '+'){
        console.log(num1+num2);
    }
    if(operacion === '*'){
        console.log(num1*num2);
    }
    if(operacion === '-'){
        console.log(num1-num2);
    }
    if(operacion === '/'){
        console.log(num1/num2);
    }


}
operacion(10,5,'+');