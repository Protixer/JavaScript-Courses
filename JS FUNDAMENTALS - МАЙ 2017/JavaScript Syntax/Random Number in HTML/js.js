function printRandomNumber(){
    const num = Math.round(Math.random()*1000);
    document.body.innerHTML += `<p>${num}</p>`;
};