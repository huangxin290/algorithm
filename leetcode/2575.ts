/**
 * 给你一个下标从 0 开始的字符串 word ，长度为 n ，由从 0 到 9 的数字组成。另给你一个正整数 m 。

word 的 可整除数组 div  是一个长度为 n 的整数数组，并满足：

如果 word[0,...,i] 所表示的 数值 能被 m 整除，div[i] = 1
否则，div[i] = 0
返回 word 的可整除数组。
 */

function divisibilityArray(word: string, m: number): number[] {
  const res: number[] = []
  let x = 0
  for(let i=0,l=word.length;i<l;i++){
    x = (x*10 + parseInt(word[i])) % m
    if(x === 0){
      res.push(1)
    }else{
      res.push(0)
    }
  }
  return res
};

console.log(divisibilityArray("998244353", 3)); // [1,1,0,0,0,1,1,0,0]
console.log(divisibilityArray("1010", 10)); // [0,1,0,1]
