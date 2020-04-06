function sumStrLength(arg1,arg2,arg3){

    let str1 = arg1;
    let str2 = arg2;
    let str3 = arg3;
    let strLength = str1.length + str2.length + str3.length;

    console.log(strLength);
    console.log(Math.round(strLength/3));
}
sumStrLength('chocolate','ice cream','cake');