function mathOperation(input1,input2,input3){
    let number1 = Number(input1);
    let number2 = Number(input2);
    let operation = input3;

    switch (operation) {
        case '*' : console.log(number1*number2); break ;
        case '+' : console.log(number1+number2); break ;
        case '-' : console.log(number1-number2); break ;
        case '/' : console.log(number1/number2); break ;
        default: console.log("Something wrong");
    }
}
mathOperation(6,2,'/');