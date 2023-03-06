
/**
 * @param {number} power
 * @param {number} taskLength
 * @param {number[]} taskArr
 * @return {number} excuteTime
 */
function aaa(power, taskLength, taskArr){
  var time = 0
  var currentTask = 0
  var i = 0
  while(i<taskLength || currentTask>0){
    if(i<taskLength){
      currentTask+=taskArr[i]
    }
    currentTask-=power
    if(currentTask<0){
      currentTask = 0
    }
    time++
    i++
  }
  return time
}

console.assert(aaa(3,5,[1,2,3,4,5]) === 6, 'test1 failed')

console.assert(aaa(4,5,[5,4,1,1,1]) === 5, 'test2 failed')