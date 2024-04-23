/**
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const n = haystack.length
  const m = needle.length

  const next = new Array(m).fill(0)
  for(let j=0,i=1;i<m;i++){
    while(j>0 && needle[i] !== needle[j]) j = next[j - 1];
    if(needle[i] == needle[j]){
        j++
    }
    next[i] = j
  }
  console.log(next);

  for(let i=0,j=0;i<n;i++){
    while (j>0 && needle[j] !== haystack[i]) {
      j = next[j - 1]
    }
    if(haystack[i] === needle[j]){
      j++
    }
    if(j === m){
      return i - m + 1
    }
  }
  return -1
};

// console.log(strStr('sadbutsad', 'sad')); // 0
// console.log(strStr('leetcode', 'leeto')); // -1
console.log(strStr('mississippi', 'issip')); // 4