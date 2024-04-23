/**
 * 定义一个单词的“兄弟单词”为：交换该单词字母顺序（注：可以交换任意次），而不添加、删除、修改原有的字母就能生成的单词。
兄弟单词要求和原来的单词不同。例如： ab 和 ba 是兄弟单词。 ab 和 ab 则不是兄弟单词。
现在给定你 n 个单词，另外再给你一个单词 x ，让你寻找 x 的兄弟单词里，按字典序排列后的第 k 个单词是什么？
注意：字典中可能有重复单词。

输入描述：
输入只有一行。 先输入字典中单词的个数n，再输入n个单词作为字典单词。 然后输入一个单词x 最后后输入一个整数k
输出描述：
第一行输出查找到x的兄弟单词的个数m 第二行输出查找到的按照字典顺序排序后的第k个兄弟单词，没有符合第k个的话则不用输出。
 */

function hj27(m, arr, x, index){
  const n = x.length
  function getMap(str){
    const newMap = {}
    for(let i=0;i<n;i++){
      const char = str[i]
      if(!newMap[char]){
        newMap[char] = 1
      }else{
        newMap[char] ++
      }
    }
    return newMap
  }
  const xMap = getMap(x)
  arr = arr.filter(item=>{
    if(item.length !== n || item === x){
      return false
    }
    const tempMap = {...xMap}
    for(let i=0;i<n;i++){
      const char = item[i]
      if(tempMap[char]){
        tempMap[char] --
        if(tempMap[char] === 0){
          delete tempMap[char]
        }
      }
    }
    if(Object.keys(tempMap).length){
      return false
    }
    return true
  })
  console.log(arr.length)
  arr.sort((a, b)=>{
    if(a < b){
      return -1
    }else if(a > b){
      return 1
    }
    return 0
  })
  console.log(arr[index - 1])
}

console.log(hj27(3,['abc','bca','cab'], 'abc', 1))