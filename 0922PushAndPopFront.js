// Array: Push Front
// Given array and an additional value, insert this
// value at the beginning of the array. Do this
// without using any built-in array methods.

function pushFront(arr,value){
    var newArr = [];
    newArr.push(value);
    for(var i = 0; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr
}

// Array: Pop Front
// Given array, remove and return the value at the
// beginning of the array. Do this without using any
// built-in array methods except pop().

function popFront(arr) {
    var removed = arr[0]
    for (var i = 0; i < arr.length / 2; i ++) {
        [arr[i], arr[(arr.length - (i + 1))]] = [arr[(arr.length - (i + 1))], arr[i]]
    }
    arr.pop()
    for (var i = 0; i < arr.length / 2; i ++) {
        [arr[i], arr[(arr.length - (i + 1))]] = [arr[(arr.length - (i + 1))], arr[i]]
    }
    return {removed,arr}

}
