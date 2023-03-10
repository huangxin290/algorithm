/**
 * 给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。

给你一个整数 k ，表示想要 连续 黑色块的数目。

每一次操作中，你可以选择一个白色块将它 涂成 黑色块。

请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
  var res = 0
  var currentWhiteCount = 0
  for(let i=0;i<blocks.length;i++){
    let item = blocks[i]
    if(i<k){
      currentWhiteCount += (item === 'W'?1:0)
      if(i===k-1){
        res = currentWhiteCount
      }
    }else{
      if(blocks[i-k] === 'W'){
        currentWhiteCount --
      }
      if(item === 'W'){
        currentWhiteCount ++
      }
      res = Math.min(res, currentWhiteCount)
    }
  }
  return res
};

console.log(minimumRecolors("WBBWWBBWBW", 7)) // 3

console.log(minimumRecolors("WBWBBBW", 2)) // 0