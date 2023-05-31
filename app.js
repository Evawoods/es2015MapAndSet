// hadDuplicate() 
const hasDuplicates = arr => new Set(arr).size !== arr.length

// vowelCount()
function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for (let char of str){
        let lowerCase = char.toLowerCase();
        if(isVowel(lowerCase)){
            if(vowelMap.has(lowerCase)){
                vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
            }else{
                vowelMap.set(lowerCase, 1);
            }
        }
    }
    return vowelMap;
}