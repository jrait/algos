// Decimal to Binary String

// Create a function dec2BinStr(value) that converts a number into a string representing that number in binary notation. For this challenge, do not use the (very convenient) toString function. For example, given the value 35, the function should return "0b100011".

function dec2BinStr(val){
    var binStr = '0b'
    var remainder = val
    var length = Math.floor(Math.log2(remainder))
    // var emptyArr = ["", "", "", "", "", 1] // 5
    //               0   1   2  3   4   5
    for(let i = length;i>=0; i--){
        let power = 2**(i)
        if((remainder - power)>= 0){
            binStr += '1'
            remainder -= power
        }
        else{
            binStr += '0'
        }
    }

    return binStr
}

console.log(dec2BinStr(35));
console.log(dec2BinStr(150));
console.log(dec2BinStr(12));
console.log(dec2BinStr(7));


//Mitch's solution
decToStr1 = (num) => {
    newStr = ""
    div = 2
    while(num > 0){
        if(num%div >= 1){
            num -= num%div
            div *= 2
            newStr = "1" + newStr

        }
        else{
            num -= num%div
            div *= 2
            newStr = "0" + newStr
        }
    }
    return "0b" + newStr
}

console.log(decToStr1(35))




// function dec2BinStr2(x) {
//     let bin = 0;
//     let rem, i = 1, step = 1;
//     while (x != 0) {
//         rem = x % 2;
//         console.log(
//             `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
//         );
//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log(`Binary: 0b${bin}`);
// }
// dec2BinStr2(35)


// console.log(Math.floor(Math.log2(35)))

// find the biggest power of 2 !!
// while 2^n is less than eqaul to val? waht if we increment n by 1 and check 
// n = 0
// newVal = 0
// while (2^n <= val) {
//            it doesn't make sense i m done haha
    //          it was a good try!!!
//    newVal = val - 2^n 
//    n ++;
// }
// and subtract?
// the last is going to be 1 

// Rachel
// Math.log2()

// Ruben's 
//   |\_/|           
//  / @ @ \          
// ( > º < )         
//  `>>x<<´     
//  /  O  \

//                 ,   __, ,
//    _.._         )\/(,-' (-' `.__
//   /_   `-.      )'_      ` _  (_    _.---._
//  // \     `-. ,'   `-.    _\`.  `.,'   ,--.\
// // -.\       `        `.  \`.   `/   ,'   ||
// || _ `\_         ___    )  )     \  /,-'  ||
// ||  `---\      ,'__ \   `,' ,--.  \/---. //
//  \\  .---`.   / /  | |      |,-.\ |`-._ //
//   `..___.'|   \ |,-| |      |_  )||\___//
//     `.____/    \\\O| |      \o)// |____/
//          /      `---/        \-'  \
//          |        ,'|,--._.--')    \
//          \       /   `n     n'\    /
//           `.   `<   .::`-,-'::.) ,' 
//             `.   \-.____,^.   /,'
//               `. ;`.,-V-.-.`v'
//                 \| \     ` \|\
//                  ;  `-^---^-'/
//                   `-.______,'
//                                   interpretation by Ruben