/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
  for(let i=n;i>=1;i--){
    let iBirnaryStr = i.toString(2)
    if(s.indexOf(iBirnaryStr) === -1){
      return false
    }
  }
  return true
}

console.log(queryString('0110', 3)) // true
console.log(queryString('0110', 4)) // false