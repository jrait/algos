function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    else{
        let pivot = arr.length -1;
        for(var j =0, i = j-1; j < pivot; j++){
            if(arr[j] <= arr[pivot]){
                i++;
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }   
        }
        [arr[pivot],arr[i+1]] = [arr[i+1],arr[pivot]]
        pivot = i+1;

        // console.log("Pivot: "+pivot)
        var arr1 = arr.slice(0,pivot)
        // console.log("Array 1 is:" + arr1)
        var arr2 = arr.slice(pivot)
        // console.log("Array 2 is:" + arr2)
        return quickSort(arr1).concat(quickSort(arr2));
}
}

// Taco Truck

// Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers. They walk to his truck, but he is fair-minded so he wants to minimize total distance from truck to customers. City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by
// street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location. Example: given [ [10,0], [-1,-10], [2,4] ], return [2,0], as total distance is 25 (8+13+4).

function TacoTruck(arr){
    let loc = [];
    let x = []
    let y = []
    for(let i = 0; i<arr.length;i++)
    {
        
        x.push(arr[i][0])
        y.push(arr[i][1])
        
    }

    x.sort((a,b) => a-b);
    y.sort((a,b) => a-b);

    loc.push(x[Math.floor(x.length/2)])
    loc.push(y[Math.floor(y.length/2)])

    return loc;
}

console.log(TacoTruck([ [10,0], [-1,-10], [2,4] ]))