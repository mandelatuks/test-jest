module.exports = stringLength = (string) => {
    const strLen = string.length;
    if(strLen >= 1 && strLen<= 10) {
        return strLen;
    } else {
        throw new Error('String length must be between 1-10');
    }
}