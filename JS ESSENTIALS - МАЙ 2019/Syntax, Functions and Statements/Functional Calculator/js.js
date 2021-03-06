function calculate(a,b,operator){
    let calc = function(a,b,operator) {return operator(a,b)};
    let add = function(a,b) {return a+b};
    let substract = function(a,b) {return a-b};
    let multiply = function(a,b) {return a*b};
    let divide = function(a,b) {return a/b};
    switch(operator){
        case '+': return calc(a,b,add);
        case '-': return calc(a,b,substract);
        case '*': return calc(a,b,multiply);
        case '/': return calc(a,b,divide);
    }
}
console.log(calculate(1,2,'+'));