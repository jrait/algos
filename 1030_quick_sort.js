// QUICK SORT
// Create a function that uses yesterday’s partitionArray() to sort an array in-place. With yesterday’s code plus a very few new lines, you will implement QuickSort! What are the run-time and space complexities of your quickSort implementation?

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    else{
        let pivot = arr.length -1;
        for(var j =0, i = j-1; j < pivot; j++){
            if(arr[j] <= arr[pivot]){
                i++;
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }   
        }
        [arr[pivot],arr[i+1]] = [arr[i+1],arr[pivot]]
        pivot = i+1;

        // console.log("Pivot: "+pivot)
        var arr1 = arr.slice(0,pivot)
        // console.log("Array 1 is:" + arr1)
        var arr2 = arr.slice(pivot)
        // console.log("Array 2 is:" + arr2)
        return quickSort(arr1).concat(quickSort(arr2));
}
}
console.log(quickSort([5,4,9,2,1,3])) // [1, 2, 3, 9, 5, 4] first iteration using yesterday algo