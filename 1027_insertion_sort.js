//Insertion Sort
//For each number in an array, check all previous numbers.  Insert the number into its correct position in the previous numbers.
//In other words, check all numbers previous in descending order.  When you find a number that is less than the current number, insert the current number to the right.

testarr = [4,3,2,10,12,1,5,6]

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        while(arr[i]<arr[i-1]){
            [arr[i],arr[i-1]] = [arr[i-1],arr[i]]
            i--
        }
    }
    return arr
}

console.log(insertionSort(testarr))