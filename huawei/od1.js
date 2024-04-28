/**
 * 
 * @param {*number} a 有a行 [0,50]
 * @param {*number} b 有b列 [0,50]
 * @param {*number} c 数位之和的最大值，数位是数字的每个位上面的数的和 [0,100]
 * @returns 
 */
function getGold(a, b, c){
  let ans = 0
  const arr = new Array(a).fill(0).map(()=>new Array(b).fill(1))
  for(let i=0;i<a;i++){
    for(let j=0;j<b;j++){
      arr[i][j] = (getBitSum(i) + getBitSum(j)) > c ? 0 : 1
    }
  }
  // 找与0,0相连的岛屿，求总和
  let nodeArr = []
  if(a > 0 && b > 0){
    arr[0][0] = 0
    nodeArr = [[0,0]]
  }
  while (nodeArr.length) {
    ans += nodeArr.length // 放进来的一定是可以的
    let newArr = []
    for(let index=0;index<nodeArr.length;index++){
      const node = nodeArr[index]
      const i = node[0]
      const j = node[1]
      // 从四个方向判断，合法则放入其中
      if(i > 0 && arr[i-1][j] === 1){ // 左
        newArr.push([i-1, j])
        arr[i-1][j] = 0
      }
      if(i < a - 1 && arr[i+1][j] === 1){ // 右
        newArr.push([i+1, j])
        arr[i+1][j] = 0
      }
      if(j > 0 && arr[i][j-1] === 1){ // 上
        newArr.push([i, j-1])
        arr[i][j-1] = 0
      }
      if(j < b-1 && arr[i][j+1] === 1){ // 下
        newArr.push([i, j+1])
        arr[i][j+1] = 0
      }
    }
    nodeArr = newArr
  }

  return ans
}

// 记忆化搜索
const bitSumArr = new Array(51).fill(0) // 0-50
function getBitSum(num){
  if(num<10){
    return num
  }
  if(bitSumArr[num]){
    return bitSumArr[num]
  }
  let ans = 0
  num.toString().split('').map((item)=>ans += parseInt(item))
  bitSumArr[num] = ans
  return ans
}

console.log(getGold(40,40,18)) // 1484
console.log(getGold(0,0,0)) // 0
console.log(getGold(4,5,7)) // 20