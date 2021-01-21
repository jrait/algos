var testArr = [6,3,5,1,2,4]

var sum=0;

for(var i=0; i<testArr.length; i++){
    sum+=testArr[i];
    console.log(testArr[i]);
    console.log(sum);
}

for(var i=0; i<testArr.length; i++){
    testArr[i]= testArr[i] * i;
}
console.log(testArr);

