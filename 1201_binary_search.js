// Binary Search

// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

function rBinSearch(sortArr,val){
    if(sortArr.length < 1){
        return false
    }
    let mid = Math.floor(sortArr.length/2)
    if(val == sortArr[mid]){
        return true
    }
    if( val > sortArr[mid]){
        return BinSearch(sortArr.slice(mid+1),val)
    }
    else if( val < sortArr[mid]){
        return BinSearch(sortArr.slice(0,mid),val)
    }
}

// console.log(rBinSearch([1,2,3,4,5,6,7,8,9],8))
// console.log(rBinSearch([1,2,3,4,5,6,7,8,9],1))
// console.log(rBinSearch([1,2,3,4,5,6,7,8,9],5))
// console.log(rBinSearch([1,2,3,4,5,6,7,8,9],10))

function BinSearch(sortArr,val){
    var searchArr = sortArr;
    while(searchArr.length >= 1){
        let mid = Math.floor(searchArr.length/2)
        if(val == searchArr[mid]){
            return true
        }
        if(val>searchArr[mid]){
            searchArr = searchArr.slice(mid+1)
        }
        else if (val<searchArr[mid]){
            searchArr = searchArr.slice(0,mid)
        }
        console.log(searchArr)
    }
    return false
}

console.log(BinSearch([1,2,3,4,5,6,7,8,9],8))
console.log(BinSearch([1,2,3,4,5,6,7,8,9],1))
console.log(BinSearch([1,2,3,4,5,6,7,8,9],5))
console.log(BinSearch([1,2,3,4,5,6,7,8,9],10))