module.exports = capitalize = (string) => {
    if (typeof string === 'string' && string.length > 0) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        throw new Error("Value must be a valid tring");
    }
}