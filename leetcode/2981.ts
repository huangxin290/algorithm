/**
 * 给你一个仅由小写英文字母组成的字符串 s 。

如果一个字符串仅由单一字符组成，那么它被称为 特殊 字符串。例如，字符串 "abc" 不是特殊字符串，而字符串 "ddd"、"zz" 和 "f" 是特殊字符串。

返回在 s 中出现 至少三次 的 最长特殊子字符串 的长度，如果不存在出现至少三次的特殊子字符串，则返回 -1 。

子字符串 是字符串中的一个连续 非空 字符序列。
 */

function maximumLength(s: string): number {
  const n = s.length
  const obj: { [key: string]: number[] } = {}
  let pre = s[0]
  let len = 0
  for (let i = 0; i < n; i++) {
    const char = s[i]
    if (pre === char) {
      len++
    } else {
      
      if (!obj[pre]) {
        obj[pre] = []
      }
      obj[pre].push(len)
      pre = char
      len = 1
    }
  }
  if (!obj[pre]) {
    obj[pre] = []
  }
  obj[pre].push(len)

  let res = -1

  Object.values(obj).map(arr => {
    arr.sort((a, b) => b - a)
    arr.length = arr.length > 7 ? 7 : arr.length
    const maxArr = arr[0]
    if (maxArr > res) {
      if (arr.length >= 3 && arr[0] === arr[1] && arr[0] === arr[2]) {
        res = maxArr
        return
      }
      if (arr.length >= 2 && arr[1] >= arr[0] - 1) {
        res = Math.max(arr[0] - 1, res)
        return
      }
      res = Math.max(arr[0] - 2, res)
    }
  })
  return res === 0 ? -1 : res
};

console.log(maximumLength('aaaa')) // 2
console.log(maximumLength('abcdef')) // -1
console.log(maximumLength('abcaba')) // 1
console.log(maximumLength('abcccccdddd')) // 3
