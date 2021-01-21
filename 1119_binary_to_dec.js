// Binary String to Decimal
// For practice, convert the following from binary to decimal. Example: '0b100111' becomes 39.
// 100000 + 100 + 10 + 1

function bin2Dec(str){
    var num = 0;
    for(let i = 2;i<str.length;i++){
        if(str[i]==1){
            num += 2**(str.length - i-1)
        }
    }
    return num
}

console.log(bin2Dec('0b100111'))
console.log(bin2Dec('0b1010010111'))
console.log(bin2Dec('0b100110'))
