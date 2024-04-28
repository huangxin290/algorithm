
/**
 * 得到可拼接的字符串格式，字符串不能有相连的字符
 * @param {*string} arr 字符
 * @param {*number} length 要求拼接的字符串长度
 */
function getStrKinds(str, length){
  const arr = str.split('')
  if(arr.length < length){
    return 0
  }
  let ans = 0
  const keyMap = {} // key 是字符，length 是字符剩余个数
  arr.map(char=>{
    if(!keyMap[char]){
      keyMap[char] = 1
    }else{
      keyMap[char] ++
    }
  })

  // 选择字符 curChar后，得到的选择
  function dfs(curChar, num){
    if(num === length){ // 组装完成
      return 1
    }
    let res = 0
    const keys = Object.keys(keyMap)
    for(let i=0,n = keys.length;i<n;i++){
      const char = keys[i]
      if(char === curChar){
        continue // 相同的跳过
      }
      // 选择
      keyMap[char] --
      if(keyMap[char] === 0){
        delete keyMap[char]
      }
      res += dfs(char, num + 1)
      // 还原
      if(!keyMap[char]){
        keyMap[char] = 0
      }
      keyMap[char] ++
    }

    return res
  }
  ans += dfs('', 0)

  return ans
}


console.log(getStrKinds('abc', 1)); // 3
console.log(getStrKinds('dde', 2)); // 2
console.log(getStrKinds('aaa', 2)); // 0