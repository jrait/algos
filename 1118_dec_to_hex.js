// Decimal to Hexadecimal
// For practice, convert the following from decimal to hexadecimal. Example: 31 becomes 0x1F.
// Divide 31 by 16, gives you 1 and a remainder of 15
// Divide 1 by 16, gives you 0 and a remainder of 1


function dec2Hex(num){
    if(num === 0) {
        return "0x0"
    }
    var newStr = ''
    const hex ={'10':'A','11':'B','12':'C','13':'D','14':'E','15':'F'}
    var rest = num
    var store = []
    
    while(rest>0){
        var remain = rest % 16
        
        store.push(remain)
        rest = Math.floor(rest/16)
    }
    for(var i = store.length-1;i>=0;i--){
        if(store[i]>9){
            newStr += hex[store[i]]
        }
        else{
        newStr += store[i]
        }
    }
    return "0x" + newStr
}

console.log(dec2Hex(31));
console.log(dec2Hex(371));
console.log(dec2Hex(375121));
console.log(dec2Hex(0));




//decToStr1 = (num) => {
//     newStr = ""
//     div = 2
//     while(num > 0){
//         if(num%div >= 1){
//             num -= num%div
//             div *= 2
//             newStr = "1" + newStr

//         }
//         else{
//             num -= num%div
//             div *= 2
//             newStr = "0" + newStr
//         }
//     }
//     return "0b" + newStr
// }

// console.log(decToStr1(35))