// String: Is Palindrome
// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

function is_palindrome(str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i])
            return false
    }
    return true
}

console.log(is_palindrome('racecar'))
console.log(is_palindrome('Dud'))
console.log(is_palindrome('oho!'))

// Bonus: Braces Valid
// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.

function bracesValid(str){
    var braces = {'}':'{',"]":"[",")":"("}
    var validate = []

    for(var i = 0; i<=str.length; i++){
        if(str[i] == "(" || str[i] == "{" || str[i] =="["){
            validate.append(str[i])
        }
        else if (str[i] == ")" || str[i] == "}" || str[i] =="]"){
            if(validate[validate.length - 1] == braces[str[i]]){
                validate.pop()
            }
            else{
                return false
            }
        }
    }
    if(validate.length == 0){
        return true
    }
    else{
        return false
    }
}

console.log(braces_valid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
console.log(braces_valid("D(i{a}l[ t]o)n{e"))
console.log(braces_valid("A(1)s[O (n]0{t) 0}k"))
