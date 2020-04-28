function printStrings(fruit,weight,money){
    let fruits = fruit;
    let weights = weight;
    let moneys = money;
    document.write(`I need ${moneys} to buy ${weights} kilograms ${fruits}`);
}
printStrings('oranges',100,1.8)