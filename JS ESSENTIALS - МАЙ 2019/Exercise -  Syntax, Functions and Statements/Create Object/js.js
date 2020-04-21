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
    document.writeln(car.color);
    document.writeln(car.make);
    document.writeln(car.model);
    document.write(car.turbo);
    document.write(car.nitro);
    
}
createObject();