// RECURSION
// 3 REQUIREMENTS FOR RECURSION
// a) Base cases:

// When a function can determine (and return) an answer immediately, this is a ‘base case’. If you successfully guess my number, I know right away that the game is over. Conversely, if you search for ‘spizzwink’ in an alphabetized word list and find nothing between ‘spitz’ and ‘splash’, you need not continue: ‘spizzwink’ was not found. There are positive and negative base cases.

// b) Forward progress:

// When a function cannot solve a problem but can narrow the range of possibilities, this is ‘forward progress’. Learning that ‘61’ is too high, you have made forward progress because you now know the solution is outside the ‘61-120’ range. For recursion to be effective, you must make at least a little forward progress in every possible case. If there is a case in which you can neither solve the problem nor break it down further, then your solution is not complete.

// c)Calling back into itself as if it were the original problem:

// If my initial challenge were “I’m thinking of an integer between 1 and 60”, you would proceed just as you did in originally after your first guess. If “taking a guess” is a function call, this function wouldn’t know the difference between initial and subsequent calls. A recursive function calls itself to narrow things down, but like most functions it generally does not need to know anything about its caller – the fact that the caller might be itself is not an important distinction.


//Recursive Sigma
// Write a recursive function that given a number returns sum of integers from 1 to that
// number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function Sigma(num){
    sum = 0
    for(var i = 1;i<=num;i++){
        sum += i
    }
    return sum
}


function rSigma(num) {
    var sum = 0
    num = Math.floor(num)
    if (num > 0) {
        sum = num + rSigma(num-1) 
    }
    return sum
}

console.log(rSigma(5))

console.log(rSigma(5))

//Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFactorial(num) {
    var fact = 1;
    num = Math.floor(num);
    if (num >= 1) {
        fact = num * rFactorial(num - 1);
    }
    return fact;
}

console.log(rFactorial(6));