/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
  return PRE_SUM[n]
};

const PRE_SUM = new Array(1001).fill(0)
for(let i = 1;i<=1000;i++){
  const s = (i*i).toString()
  PRE_SUM[i] = PRE_SUM[i-1] + (dfs(0,0,s,i)?i*i:0)
}

function dfs(p,sum,s,i){
  const n = s.length
  if(p === n) {
    return sum === i
  }
  let x = 0
  for(let j=p;j<n;j++){
    x=x*10+parseInt(s[j])
    if(dfs(j+1, sum+x,s,i)){
      return true
    }
  }
  return false
}