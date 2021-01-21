// String to Word Array
// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is" "not", "a", "drill!"].
// don't use built-in functions like split,join, or reverse

function stringToArray(str){
    var arr = []
    var word = ""

    for(let i = 0;i<str.length;i++){
        if(str[i]==' '){
            arr.push(word)
            word = ""
        }
        else{
            word = word + str[i]
        }
    }
    arr.push(word)
    return arr
}

console.log(stringToArray("Life is not a drill!"))

// Reverse Word Order
// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence. Given "This is a test", return "test a is This".

function reverseWord(str){
    var arr = stringToArray(str)
    var newStr = ''
    for(let i = 0;i<arr.length;i++){
        newStr = arr[i] +" "+newStr 
    }
    return newStr
}

console.log(reverseWord("Life is not a drill!"))

