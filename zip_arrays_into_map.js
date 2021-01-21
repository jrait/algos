// Zip Arrays into Map

// Associative arrays are sometimes called maps because a key (string) maps to a value. 

//Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

//Two arrays given
//Need to put into a new map/dictionary
//


function zipArrays(keyarr,valarr){
    map= {}
    
    if(keyarr.length < valarr.length){
        var shortlength = keyarr.length
    }
    else{
        shortlength = valarr.length
    }
    
    for(var i =0; i<shortlength; i++){
        map[keyarr[i]]=valarr[i]
    }

    return map
}

console.log(zipArrays(["abc", 3, "yo"],[42, "wassup", true]))
