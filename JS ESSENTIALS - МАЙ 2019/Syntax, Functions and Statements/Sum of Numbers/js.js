function sumNumbers(a,b){
    let num1 = Number(a);
    let num2 = parseFloat(b);
    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
        
    }
    console.log(result);
}
sumNumbers('1','2');