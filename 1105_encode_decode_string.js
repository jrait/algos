// String Encode
// You are given a string that may contain sequences of consecutive characters. Create a function to shorten a string by including the character, then the number of times it appears. For "aaaabbcddd", return "a4b2c1d3". If result is not shorter (such as "bb"=>"b2"), return the original string.

function encode(str){
    var newStr = ''
    for(var i = 0; i< str.length; i++){
        newStr += str[i]
        var count = 1
        while(str[i] === str[i+1]){
            count++
            i++
        }
        num = count.toString()
        newStr += num
    }
    if (newStr.length >= str.length){
        return str
    }else{
        return newStr}
}

function betterEncode(str){
    var newStr = ''
    var count = 1
    for(var i = 0; i< str.length; i++){
        if(str[i] === str[i+1]){
            count++
        }
        else{
            newStr += str[i] + count
            newStr += num
            count = 1
        }
    }
    if (newStr.length >= str.length){
        return str
    }else{
        return newStr}
}


// console.log(betterEncode("aaaaaaaaaaaaaaaabbcddd"))
// console.log(betterEncode("abcdd"))

// String Decode
// Given an encoded string (see above), decode and return it. Given "a3b2c1d3", return "aaabbcddd".

function decode(str){
    var newStr = ''
    var numCheck = {'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}
    for(var i = 0;i<str.length;i++){
        var count = 1
        if(str[i] in numCheck){
            var add = str[i-1]
            var num = str[i]
            var j = i+1;
            while(str[j] in numCheck){
                num += str[j]
                j++
                i++
            }
            num = parseInt(num)
            while(count<num){
                newStr += add
                count++
            }
        }
        else{
            newStr += str[i]
        }
    }
    return newStr
}

console.log(decode('a321b2c1d3'))
console.log(decode('abcdd'))

//with NaN
function decode2(str){
    var newStr = ''
    for(var i = 0;i<str.length;i++){
        var count = 1
        if(!isNaN(str[i])){
            var add = str[i-1]
            var num = str[i]
            var j = i+1;
            while(!isNan(str[j])){
                num += str[j]
                j++
                i++
            }
            num = parseInt(num)
            while(count<num){
                newStr += add
                count++
            }
        }
        else{
            newStr += str[i]
        }
    }
    return newStr
}