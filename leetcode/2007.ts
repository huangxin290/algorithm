/**
 * 一个整数数组 original 可以转变成一个 双倍 数组 changed ，转变方式为将 original 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。

给你一个数组 changed ，如果 change 是 双倍 数组，那么请你返回 original数组，否则请返回空数组。original 的元素可以以 任意 顺序返回。
 */

function findOriginalArray(changed: number[]): number[] {
  if(changed.length % 2 !== 0){
    return []
  }
  const numMap:{ [key: number]: number } = {}
  for(let num of changed){
    if(!numMap[num]){
      numMap[num] = 1
    }else{
      numMap[num] ++
    }
  }

  const res = []
  

  // 0 比较特殊，必须是偶数个
  if(numMap[0]){
    if(numMap[0] % 2 !== 0){
      return []
    }else{
      res.push(...new Array(numMap[0]/2).fill(0)) // 放入0
      delete numMap[0]
    }
  }

  // object循环会自动排序的,是奇数就找双倍，是偶数也是找双倍
  for(let num in numMap){
    const doubleNum = parseInt(num) * 2
    
    // if(parseInt(num) % 2 === 1){
      // 奇数直接找双倍数
      if(!numMap[doubleNum]){
        return []
      }
      if(numMap[doubleNum] < numMap[num]){
        return []
      }else{
        numMap[doubleNum] -= numMap[num]
        if(numMap[doubleNum] === 0){
          delete numMap[doubleNum]
        }
        res.push(...new Array(numMap[num]).fill(num)) // 将数放入
        delete numMap[num]
      }
    // }
  }

  return res
    
};

console.log(findOriginalArray([8,2,1,6,3,4])); // [1,3,4]
console.log(findOriginalArray([6,3,0,1])); // []
console.log(findOriginalArray([1])); // []
console.log(findOriginalArray([0,0,0,0])); // [0,0]
console.log(findOriginalArray([2,1,2,4,2,4])); // [1,2,2]

