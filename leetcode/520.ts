/**
 * 我们定义，在以下情况时，单词的大写用法是正确的：

全部字母都是大写，比如 "USA" 。
单词中所有字母都不是大写，比如 "leetcode" 。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。
 */

function detectCapitalUse(word: string): boolean {
  return word === word.toLocaleUpperCase() || word === word.toLocaleLowerCase() || word === (word[0].toLocaleUpperCase() + word.substring(1).toLocaleLowerCase())
};

console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("FlaG")); // false
