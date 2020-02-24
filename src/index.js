module.exports = function reverse (n) {
    n = Math.abs(n)
    let arr_digits = String(n).split('').reverse();
    return Number(arr_digits.join(''))
  
}
