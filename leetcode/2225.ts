/**
 * 给你一个整数数组 matches 其中 matches[i] = [winneri, loseri] 表示在一场比赛中 winneri 击败了 loseri 。

返回一个长度为 2 的列表 answer ：

answer[0] 是所有 没有 输掉任何比赛的玩家列表。
answer[1] 是所有恰好输掉 一场 比赛的玩家列表。
两个列表中的值都应该按 递增 顺序返回。

注意：

只考虑那些参与 至少一场 比赛的玩家。
生成的测试用例保证 不存在 两场比赛结果 相同 。
 */

function findWinners(matches: number[][]): number[][] {
  const winObj:{[key:string]: boolean} = {}
  const loss1:{[key:string]: number} = {}
  for(let i=0,l=matches.length;i<l;i++){
    const winner = matches[i][0]
    const loser = matches[i][1]
    if(winObj[winner] === undefined){
      winObj[winner] = true
    }
    
    winObj[loser] = false

    if(!loss1[loser]){
      loss1[loser] = 1
    }else{
      loss1[loser] = 2
    }
  }
  for(let key in winObj){
    if(winObj[key] === false){
      delete winObj[key]
    }
  }
  for(let key in loss1){
    if(loss1[key] === 2){
      delete loss1[key]
    }
  }
  return [Object.keys(winObj).map(val=>parseInt(val)), Object.keys(loss1).map(val=>parseInt(val))]
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])); // [[1,2,10],[4,5,7,8]]
console.log(findWinners([[2,3],[1,3],[5,4],[6,4]])); // [[1,2,5,6],[]]
