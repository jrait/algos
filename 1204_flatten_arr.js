// FLATTEN ARRAY

// Flatten a given array, eliminating nested & empty arrays. Do not alter it; return a new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4].

function flatten(arr)
{
    let newArr = [];
    for(let i = 0; i<arr.length;i++)
    {
        if(arr[i].length)
        {
            let nested = flatten(arr[i])
            for(let j = 0;j<nested.length;j++)
                {
                    newArr.push(nested[j])
                }
        }
        else if(arr[i].length==0){}
    else{
        newArr.push(arr[i])
    }
    }
    return newArr;
}

console.log(flatten([1,[2,3],4,[]]));
console.log(flatten([[1,[2,4,5],3],[],42,[6,7]]))

