// Intersect Sorted Array
// Efficiently combine two sorted arrays into an array containing the sorted multiset intersection of the two. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [2,2,7].


function intersect(arr1,arr2){
    var newArr = [];
    var start = 0;
    for(let i=0;i<arr1.length;i++){
        for(let j=start;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                newArr.push(arr1[i]);
                start = j+1
                break
            }
        }
    }
    return newArr
}



// console.log(intersect([1,2,2,2,7],[2,2,6,6,7]))
// console.log(intersect([1,2,2,7],[2,2,2,6,6,7]))
// console.log(intersect([1,2,2,2,2,7],[1,1,2,2,6,6,7]))
// console.log(intersect([1,2,2,2,3,3,7],[4,6,6]))


//Another solution
const multisort = (arr1, arr2) => {
    let output = [];
    let i = 0;
    let j = 0;
    while (j <= arr2.length && i <= arr1.length) {
        if (arr1[i] == undefined || arr2[j] == undefined) {
            break;
        }
        if (arr1[i] > arr2[j]) {
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[i] == arr2[j]) {
            output.push(arr1[i]);
            i++;
            j++;
        }
    }
    return output;
};

console.log(multisort([1,2,2,2,7],[2,2,6,6,7]))
console.log(multisort([1,2,2,7],[2,2,2,6,6,7]))
console.log(multisort([1,2,2,2,2,7],[1,1,2,2,6,6,7]))
console.log(multisort([1,2,2,2,3,3,7],[4,6,6]))