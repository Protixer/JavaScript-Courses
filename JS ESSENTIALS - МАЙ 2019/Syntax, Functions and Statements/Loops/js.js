let arr = [10,30,70,40,50];

for (const index in arr) {
    console.log(`Index ${index}`);
};
for (const element of arr) {
    console.log(`Element => ${element}`);
};
for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach((v,i) => document.write(`<p> ${v} => ${i} </p> `));