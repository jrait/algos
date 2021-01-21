// Parens Valid
// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parensValid(str){
    var count_open = 0
    var count_closed = 0

    for(var i = 0; i<=str.length;i++){
        if (str[i] =="("){
            count_open++
        }
        else if (str[i]== ")"){
            count_closed++
        }
        if(count_closed>count_open){
            return false
        }
    }
    if(count_open-count_closed == 0){
        return true
    }
    else{
        return false
    }
}

console.log(parensValid("Y(3(p)p(3)r)s"))
console.log(parensValid("N(0(p)3"))
console.log(parensValid("N(0)t )0(k"))