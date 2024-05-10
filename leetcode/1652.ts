/**
 * 你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 n 的 循环 数组 code 以及一个密钥 k 。

为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。

如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
如果 k == 0 ，将第 i 个数字用 0 替换。
由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，且 code[0] 前一个元素是 code[n-1] 。

给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！
 */

function decrypt(code: number[], k: number): number[] {
  const n = code.length
  const res: number[] = new Array(n).fill(0)
  if (k === 0) {
    return res
  }
  let sum = 0
  const index = k>0?1:(k%n+n)
  for(let i = index;i<Math.abs(k) + index;i++){
    sum += code[i%n]
  }
  res[0] = sum
  let deleteIndex = index
  let addIndex = (index+Math.abs(k))%n
  for(let i=1;i<n;i++){
    
    sum -= code[deleteIndex]
    sum += code[addIndex]
    res[i] = sum
    deleteIndex += 1
    deleteIndex %= n
    addIndex += 1
    addIndex %= n
  }
  return res
};

console.log(decrypt([5, 7, 1, 4], 3)) // [12,10,16,13]
console.log(decrypt([1, 2, 3, 4], 0)) // [0,0,0,0]
console.log(decrypt([2, 4, 9, 3], -2)) // [12,5,6,13]
