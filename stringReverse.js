// String Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed. Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

function reverseString(str){
    var reversed = ""

    for(var i = str.length -1; i>=0; i--){
        reversed += str[i]
    }
    return reversed
}

console.log(reverseString("hello"))
