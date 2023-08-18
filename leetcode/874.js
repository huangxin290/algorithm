/**
 * 机器人在一个无限大小的 XY 网格平面上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令 commands ：

-2 ：向左转 90 度
-1 ：向右转 90 度
1 <= x <= 9 ：向前移动 x 个单位长度
在网格上有一些格子被视为障碍物 obstacles 。第 i 个障碍物位于网格点  obstacles[i] = (xi, yi) 。

机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续尝试进行该路线的其余部分。

返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。（即，如果距离为 5 ，则返回 25 ）
 */

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  var obstacle = {}
  let obLen = obstacles.length
  for(let i=0;i<obLen;i++){
    obstacle[obstacles[i][0]] = obstacles[i][1]
  }
  var diraction = 0  //0表示Y+，1表示x+，2表示y-，3表示x-
  var x=0,y=0
  let length = commands.length
  let result = 0
  for(let i=0;i<length;i++){
    let command = commands[i]
    if(command<0){
      diraction = changeDiraction(diraction, command)
    }else{

      result = Math.max(result, x*x + y*y)
    }
  }
  
}

function changeDiraction(diraction, change){
  if(change === -2){
    diraction --
    if(diraction<0){
      diraction = 3
    }
  }else if(change === -1){
    diraction ++
    if(diraction>3){
      diraction = 0
    }
  }
  return diraction
}

console.log(robotSim([4,-1,3], []))  // 25
console.log(robotSim([4,-1,4,-2,4], [[2,4]]))  // 25
