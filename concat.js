// Array: Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new
// array containing the first array’s elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].


function concatArr(a, b) {
    newArr = []
    for (var i = 0; i < a.length; i++) {
        newArr.push(a[i])
    }
    for (var j = 0; j < b.length; j++) {
        newArr.push(b[j])
    }
    return newArr
}

console.log(concatArr([1, 2, 3], [4, 5, 6]))

// Extra challenge: Can you make a function that does something similar, but alternates the items? So:
// [2,4,6] and [1,2,3] would be:
// [2,1,4,2,6,3]


function zipperArr(a, b) {
    newArr = []

    count = 0
    while(newArr.length < (a.length + b.length)){
        if (a.length > count){
            newArr.push(a[count])
        }
        if (b.length > count){
            newArr.push(b[count])
        }
        count++
    }
    return newArr
}

console.log(zipperArr([1, 2, 3, 7, 8], [4, 5, 6]))
console.log(zipperArr([1, 2, 3,], [4, 5, 6, 7, 8]))