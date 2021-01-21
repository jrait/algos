// Remove Duplicates

// Remove array duplicates. Do not alter original. Return new array with results in (original order). For [1,2,1,3,4,2] return [1,2,3,4].

function dedupeArr(arr){
    let newArr = [arr[0]];
    for(let i = 1;i<arr.length;i++){
        let dupe = false;
        for(let j = 0;j<newArr.length;j++){
            if(arr[i] == newArr[j]){
                dupe = true
                break
            }
        }
        if(!dupe){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(dedupeArr([2,3,5,3,2,6,2,3,67,3]))

function dedupeArr2(arr){
    let newArr = [];
    let freq = {};
    for(let i = 0; i<arr.length;i++){
        if(!(arr[i] in freq)){
            freq[arr[i]] = 1;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(dedupeArr2([2,3,5,3,2,6,2,3,67,3]))

function dedupeArr3(arr){
    for(let i = 1;i<arr.length;i++){
        for(let j = i-1; j >= 0; j--){
            if(arr[i]==arr[j]){
                [arr[i],arr[arr.length-1]] = [arr[arr.length-1],arr[i]]
                arr.pop();
                i--;
                break;
            }
        }
    }
    return arr;
}
console.log(dedupeArr3([2,3,5,3,2,6,2,3,67,3]))