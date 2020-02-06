const doThis = (str, func) => func(str);
const str = "supercalifragilisticexpialidocious";
let result = doThis(str, function splitC(str){
    return str.replace(/([c])/g,'-c').split('-')
});
let result2 = doThis(str, function buildObject(str){
    let originalString = str;
    let modifiedString = str.replace(/([a])/g, 'A');
    let numberReplaced = (originalString.match(/a/g) || []).length;
    let length = modifiedString.length;
    let strObject = {
        originalString: originalString,
        modifiedString: modifiedString,
        numberReplaced: numberReplaced,
        length: length,
    }
    return strObject;
});

console.log(result);
console.log(result2);