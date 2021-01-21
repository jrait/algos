//Design an algorithm to find all pairs of integers within an array which sum to a specified value

function PairsToSum(arr,val){
    let output = "";
    for(let i = 0; i<arr.length;i++){
        for(let j = i+1; j<arr.length;j++){
            if(arr[i]+arr[j]==val){
                output += `(${arr[i]},${arr[j]}), `
            }
        }
    }
    return output;
}

let testArr = [7,5,8,6,10,4,15,3,9,2,-2]
console.log(PairsToSum(testArr,17))
