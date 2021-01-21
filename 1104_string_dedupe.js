// String Dedupe
// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".
//

function stringDedupe(str){
    var newStr = ''
    var isDupe = false
    for(let i = 0; i<str.length; i++){
        isDupe = false
        for(let j = i+1;j<str.length;j++){
            if(str[i]===str[j]){
                isDupe = true
                break
            }
        }
        if( !isDupe ){
        newStr = newStr + str[i]
    }
    }

    return newStr
}



function stringDedupe2(str){
    var result = "";
    var freq = {};
    for(i=str.length-1;i>=0;i--){
        let char = str[i];
            if(freq[char]) {
                freq[char]++;      
                } 
            else {
                freq[char]=1
                result = char+result;
                }
    }
    return result
}

console.log(stringDedupe2("Snaps! crackles! pops!"))
console.log(stringDedupe2("quickly!"))