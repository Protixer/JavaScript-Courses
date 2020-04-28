function createObject(){
    let car = {
        model:"328",
        make:"BMW",
        color:"blue"
    }
    

    console.log(car.model);

    car.color = "red";
    car["nitro"] = "yes";
    car.turbo = "on";
    car.boost = "no";
    document.writeln(car.color);
    document.writeln(car.make);
    document.writeln(car.model);
    document.writeln(car.turbo);
    document.writeln(car.nitro);
    
}
createObject();