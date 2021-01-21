// Union Sorted Arrays
// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].



function union(arr1,arr2){
    var newArr = []
    let i = 0;
    let j = 0;
    while(i< arr1.length || j<arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i]);
            i++
        }
        else if (arr1[i] > arr2[j]){
            newArr.push(arr2[j]);
            j++
        }
        else if (arr1[i]==arr2[j]){
            newArr.push(arr1[i]);
            i++
            j++
        }
        else{
            if(i<arr1.length){
                newArr.push(arr1[i])
                i++
            }
            if(j<arr2.length){
                newArr.push(arr2[j])
                j++
            }
        }
    }
    
    return newArr
}

console.log(union([1,2,2,2,7],[2,2,6,6,7]))
console.log(union([1,2,2,2,7],[2,2,6,6,7,8,9,10]))
console.log(union([1,2,2,2,7,8,9,10],[2,2,6,6,7]))


// const intersect = (arr1, arr2) => {
//     let output = [];
//     let i = 0;
//     let j = 0;
//     while (j <= arr2.length && i <= arr1.length) {
//         if (arr1[i] == undefined || arr2[j] == undefined) {
//             break;
//         }
//         if (arr1[i] > arr2[j]) {
//             j++;
//         } else if (arr1[i] < arr2[j]) {
//             i++;
//         } else if (arr1[i] == arr2[j]) {
//             output.push(arr1[i]);
//             i++;
//             j++;
//         }
//     }
//     return output;
// };