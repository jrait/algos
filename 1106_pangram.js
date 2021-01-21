// IsPangram

// Return whether a string contains all letters in the English alphabet (upper or lower case). For "How quickly daft jumping zebras vex!", return true. For "abcdef ghijkl mno pqrs tuv wxy, not so fast!", return false

// Check for 26 unique alpha characters
// Don't care about numbers or special characters
// If alpha character, check each character to see if it's unique
// Record each unique alpha characters
// 

function isPangram(str){
    if(str.length<26){
        return false
    }
    var lowerStr = str.toLowerCase()
    var characters = []
    var alphabet = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0}
    var inChar = false

    for(var i = 0;i<str.length;i++){
        inChar = false
        if(lowerStr[i] in alphabet){
            for(var j = 0;j<characters.length;j++){
                if(lowerStr[i]===characters[j]){
                    inChar = true
                    break
                }
            }
            if(!inChar){
                characters.push(lowerStr[i])
            }
        }
    }
    console.log(characters)
    if(characters.length>=26){
        return true
    } else{
        return false
    }
}

console.log(isPangram( "How quickly daft jumping zebras vex!"))
console.log(isPangram( "abcdef ghijkl mno pqrs tuv wxy, not so fast!"))
console.log(isPangram( "How quickly ng  vex!"))

// Sean's way, more efficient
const isPangram2 = (astr) => {
    if (astr.length < 26) return false
    let countObj = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0}
    astr = astr.toLowerCase()
    for (i=0; i<astr.length; i++) {
        countObj[astr[i]] = 1
    }
    for (value of Object.values(countObj)) {
        if (value == 0) return false
    }
    return true
}