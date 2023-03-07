/**
 * 给你一个字符串 s ，它仅包含字符 'a' 和 'b'​​​​ 。

你可以删除 s 中任意数目的字符，使得 s 平衡 。当不存在下标对 (i,j) 满足 i < j ，且 s[i] = 'b' 的同时 s[j]= 'a' ，此时认为 s 是 平衡 的。

请你返回使 s 平衡 的 最少 删除次数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  
  var shouldDelete = 0
  for(let i=0;i<s.length;i++){
    if(s[i] === 'a'){
      shouldDelete ++
    }
  }
  var res = shouldDelete
  
  for(let i=0;i<s.length;i++){
    var item = s[i]
    if(item === 'a'){
      shouldDelete --
    }else if(item === 'b'){
      shouldDelete ++
    }
    res = Math.min(res, shouldDelete)
  }
  return res
};

console.assert(minimumDeletions('aababbab') === 2, 'test1 failed')
console.assert(minimumDeletions('bbaaaaabb') === 2, 'test2 failed')
console.assert(minimumDeletions('baababbaabbaaabaabbabbbabaaaaaabaabababaaababbb') === 18, 'test3 failed')