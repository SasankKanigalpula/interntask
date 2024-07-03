function reverseNumber(number) {
    let numberStr = number.toString();
    let reversedStr = numberStr.split('').reverse().join('');
    let reversedNumber = parseFloat(reversedStr) * Math.sign(number);
    return reversedNumber;
}