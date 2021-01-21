// Bubble Sort
// Create a function that uses BubbleSort to sort an unsorted array in-place.
    // Compare each value with the next in the array and swap if needed, should sort small to large
    // Will need to check through entire array multiple times

function bubbleSort(arr){
    for(let i = 0; i< arr.length; i++){

        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([5,8,6,1,3,2]))
// Selection Sort
// Create a function that uses Selection Sort to sort an unsorted array in-place.
    // Find the minimum and swap it with the front
    // Only have to look right of the index, since we already know the minimum is at the front

function selectionSort(arr){
    for(let i = 0; i< arr.length; i++){
        var min = arr[i]
        var min_index = i
        for(let j = i; j < arr.length; j++){
            if (arr[j] < min){
                min = arr[j]
                min_index = j
            }
        }
        arr[min_index] = arr[i]
        arr[i] = min
    }
    return arr
}
console.log(selectionSort([5,8,6,1,3,2,0]))