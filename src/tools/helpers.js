const randomInt = (min, max) => {
    const int = min + Math.random() * (max + 1 - min);
    
    return Math.floor(int);
}

module.exports = {
    randomInt
}