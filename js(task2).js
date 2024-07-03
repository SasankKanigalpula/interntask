function alphabetizeString(str) {
    let charArray = str.split('');
    charArray.sort();
    let sortedStr = charArray.join('');   
    return sortedStr;
}
console.log(alphabetizeString('webmaster')); 