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
    
}
createObject();