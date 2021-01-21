// Book Index
// Martin is writing his opus: a book of algorithm challenges, set as lyrics to a suite of a cappella fugues. Some of ‘those fugueing challenges’ are less popular than others, so he needs an index. 

//Given a sorted array of pages where a term appears, produce an index string. 

//Consecutive pages should form ranges separated by a hyphen. For [1,13,14,15,37,38,70], return string "1, 13-15, 37-38, 70". Take care to get all the commas and spaces correct: Martin is palpably particular (practically persnickety!) about patchy punctuation.


// add each number from list to a string
// if 2 or more consecutive numbers, only put first and last numbers with a hyphen connecting
// seperate everything else with a comma


function bookIndex(arr) {
    var str = "";
    var check = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] == arr[i] + 1) {
            check.push(arr[i]);
        }
        else if(check.length>0){
            if (i != arr.length-1){
                str += check[0] + '-'+ arr[i]+", "
                check = []
            }
            else{
                str += check[0] + '-'+ arr[i]
                check = []
            }
        }
        else {
            if (i != arr.length-1){
                str += arr[i] + ", ";
            }
            else{
                str+= arr[i];
            }
        }
    }
    return str
}