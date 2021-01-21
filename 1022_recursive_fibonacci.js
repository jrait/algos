// Recursive Fibonacci
// Write rFib(num). Recursively compute and return the Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

//  0  1  2  3  4  5  6  7   8   9   10  11
//[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...]



function rFib(index){
    if(index <= 0){
        return 0
    }
    else if(index ==1){
        return 1
    }
    else{
        var result = rFib(index-2) + rFib(index-1)
        return result
    }
}

console.log(rFib(15))