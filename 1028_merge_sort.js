// Create function combineArrs(arr1,arr2) 
// that sorts two already separately sorted arrays, placing the result back into the first provided array. 

//combine both arrays
function combineArrs(arr1,arr2){
    newArr = []
    for(var i = 0, j = 0; i<arr1.length || j<arr2.length;){
        if(arr1[i]<=arr2[j]){
            newArr.push(arr1[i])
            i++
        }
        else if(arr2[j]<=arr1[i]){
            newArr.push(arr2[j])
            j++
        }
        else{
            if(i>=arr1.length){
                newArr.push(arr2[j])
                j++
            }
            else if(j>=arr2.length){
                newArr.push(arr1[i])
                i++
            }
            }
        }
    return newArr
}

console.log(combineArrs([1,4,6],[2,3,7]))
console.log(combineArrs([5,6],[1,2,3,4]))

// Use the combineArrs() function above to construct mergeSortArr() for an unsorted array.


function mergeSortArr(arr){
    if (arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    var leftArr = arr.slice(0,mid);
    var rightArr = arr.slice(mid);

    return combineArrs(mergeSortArr(leftArr),mergeSortArr(rightArr))
}

console.log(mergeSortArr([4,8,63,24,46,26,85,5,45,62,23,12,8]))




//Adrien's answer

function adrienCombineArrays(arr1, arr2){
    let idx1 = 0,
        idx2 = 0,
        output = [];
    while( idx1 < arr1.length && idx2 < arr2.length){
        if( arr1[idx1] < arr2[idx2]){
            output.push(arr1[idx1]);
            idx1 ++;
        }
        else if( arr2[idx2] < arr1[idx1]){
            output.push(arr2[idx2]);
            idx2 ++;
        }
    }

    return output.concat(arr1.slice(idx1), arr2.slice(idx2));
}

function adrienMergeSort(arr){
    // Base Case
    if(arr.length < 2){
        return arr;
    }
    // 
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return adrienCombineArrays(
        adrienMergeSort(left),adrienMergeSort(right)
    );
}

// console.log(mergeSortArr([4,8,63,24,46,26,85,5,45,62,23,12,8]))

// console.log(combineArrays([1,3,5],[2,4,8,10]));
// console.log(combineArrays([1,3,5,7],[2,4,6]));
// console.log(combineArrays([1,3,5,7],[2,4,10]));