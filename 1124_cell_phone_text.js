//On old cell phones users typed on a numeric keypad and the phone would proivde a list of words that matched these numbers.  Each digit mapped to a set of 0-4 letters.  Implement an algo to return a list of matching words, given a sequence of digits.  You are provided a list of words (provided in whatever data structur you'd like).

//  1     2     3
//       abc    def
//  4     5     6
// ghi   jkl   mno
//  7     8     9
// pqrs  tuv   wxyz

words = ['tree','used','plate','lol','fire','park','play','run','yell','jump']
// wordsObj = {'tree':8733,'used':8733,'plate':75283,'lol':565,'fire':3473,'park':7275,'play':7529,'run':786,'yell':9355,'jump':5867,'bot':268,'ant':268,'cot':268,'bottle':268853}
wordsObj2 = {8733:['tree','used'],268:['bot','ant','cot'],268853:['bottle']}
function text(numbers,words){  
    return words[numbers]
}

function text2(numbers,words){
    let map = {2:['a','b','c'],3:['d','e','f'],4:['g','h','i'],5:['j','k','l'],6:['m','n','o'],7:['p','q','r','s'],8:['t','u','v'],9:['w','x','y','z']}
    let matrix = []
    for(let number of numbers){
        matrix.push(map[number])
    }
    
}
console.log(text2(8733,words))