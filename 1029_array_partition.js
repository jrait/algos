// Array: Partition
// Partition unsorted array in-place. Use arr[arr.length -1] as pivot val; return idx of pivot. Input [5,4,9,2,5,3] becomes [2,3,9,5,5,4], return 1.

// Essentially, pick a pivot value and move all numbers in the array to either side of that number
//Everything on the left hand side will be less than the pivot value, and everything on the right will be greater than(Doesn't have to be in order)

function partition(arr){
    var pivot = arr[arr.length -1]
    var j = 0
    for(let i = 0;i<arr.length-1;i++){
        if (arr[i]<pivot){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            j++
        }
    }
    [arr[arr.length-1],arr[j]] = [arr[j],arr[arr.length -1]]

    return arr
}

console.log(partition([5,1,2,4,9,2,5,2,3]))

