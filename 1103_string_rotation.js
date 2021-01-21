// Rotate String
// Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that amount. Example: given ("Boris Godunov",5), you should return "dunovBoris Go".

function rotateString(str,num){
    var newStr = ''
    var rotater = num
    if(rotater>str.length){
        rotater = num % str.length
    }

    for(let i = str.length-rotater;i<str.length;i++){
        newStr =  newStr + str[i]
    }
    for (let i = 0;i< str.length - rotater;i++){
        newStr = newStr + str[i]
    }
    
    return newStr
}

console.log(rotateString("Boris Goduno",14))



// Is Rotation
// Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?

function isRotation(str1,str2){
    if(str1.length != str2.length){
        return false
    }
    for(let i = 0;i<str1.length;i++){
        if(rotateString(str1,i) == str2){
            return true
        }
    }
    return false
    
}