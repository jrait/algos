// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false; rBinarySearch([4,5,6,8,12],5) = true.


function rBinarySearch(arr,val){
    var i = Math.floor(arr.length/2)
    if (arr[i] == val){
        return true
    }
    else if( val > arr[i]){
        if(i==arr.length-1){
            return false
        }
        rightArr = []
        for(var j = i+1; j<arr.length; j++){
            rightArr.push(arr[j])
        }
        return rBinarySearch(rightArr,val)
    }
    else if( val < arr[i]){
        if(i==0){
            return false
        }
        leftArr = []
        for(var j = 0; j<i; j++){
            leftArr.push(arr[j])
        }
        return rBinarySearch(leftArr,val)
    }
}

[4,5,6,8,12],5

console.log(rBinarySearch([1,3,5,6,7,8,9,10],4))
console.log(rBinarySearch([4,5,6,7,8,9,10],5))


//Adrien's solution
function rBinarySearchAdrien(arr,val){
    if (arr.length <=1){
        return arr[0] === val
    }
    let mid = Math.floor(arr.length/2)


    if(val === arr[mid]) return true;
    else if(val >arr[mid])return rBinarySearch(arr.slice(mid+1),val)
    else return rBinarySearch(arr.slice(0,mid),val)   //.slice(start,end)
}
