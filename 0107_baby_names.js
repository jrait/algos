// Each year, the government releases a list of the 10000 most common baby names and their frequencies (the number of babies with that name).  The only problem with this is that some names have multiples spellings. For example, "John" and "Jon" are essentially the same name but would be listed separately in the list.  Given two lists, one of names/frequencies and the other of pairs of equivalent names, write an algorithm to print a new list of the true frequency of each name.  Note that if John and Jon are synonyms, and Jon and Johnny are synonyms, then John and Johnny are synonyms. (It is both transitive and symmetric.) In the final list, any name can be used as the "real" name.

function babyNames(freqList,synList){
    let output = {};
    let newSynList = {};
    for(const item in synList){
        if(item in newSynList){
            newSynList[item].push(synList[item]);
        }
        else if(synList[item] in newSynList){
            newSynList[synList[item]].push(item);
        }
        else{
            newSynList[item] = [item,synList[item]]
        }
    }
    console.log(newSynList)
    for(const name in freqList){
        let count = 0;
        if(newSynList[name]){
            for(const syn of newSynList[name]){
                count += freqList[syn];
            }
            output[name] = count;
        }
    }
    console.log(output)
}

let names = {"John": 15,"Jon":12,"Johnny":4,"Chris":13,"Kris":4,"Christopher":19}
let synonyms = [["John","Johnny"],["John","Jon"],["Chris","Kris"],["Christopher","Kris"]]
let synObj = {"John":"Johnny","Jon":"John","Chris":"Kris","Christopher":"Kris"}

babyNames(names,synObj);