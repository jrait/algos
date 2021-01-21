// Union Unsorted Array

// Return a new unsorted union multiset of two arrays; do not alter the originals. For
// [2,7,2,1,2] and [6,7,2,7,6,2], you could return [7,2,7,2,2,1,6,6].

function intersect(arr1,arr2){
    newArr = [];
    let i = 0
    let j = 0
    while(i<arr1.length && j<arr2.length){
        
    }
}


function unionUnsorted(arr1,arr2){
    var newArr = []
    var tracker = {}
    for(var i=0;i<arr1.length;i++){
        var match = false
        var j = 0
        newArr.push(arr1[i])
        // while(j<arr2.length){
        //     if(arr1[i]==arr2[j]){

        //     }
        //     j++
        // }
        for(var j=0;j<arr2.length;j++){
            if (arr1[i] == arr2[j]){
                match=true

            }
        }
        if(!match){
            if(arr[i]in tracker){
                tracker[arr[i]] += 1
            }
            else{
                tracker[arr[i]] = 1
            }
        }
    }

    return newArr
}

console.log(unionUnsorted([2,7,2,1,2],[6,7,2,7,6,2]))

