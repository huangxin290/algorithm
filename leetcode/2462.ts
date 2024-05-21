/**
 * 给你一个下标从 0 开始的整数数组 costs ，其中 costs[i] 是雇佣第 i 位工人的代价。

同时给你两个整数 k 和 candidates 。我们想根据以下规则恰好雇佣 k 位工人：

总共进行 k 轮雇佣，且每一轮恰好雇佣一位工人。
在每一轮雇佣中，从最前面 candidates 和最后面 candidates 人中选出代价最小的一位工人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。
比方说，costs = [3,2,7,7,1,2] 且 candidates = 2 ，第一轮雇佣中，我们选择第 4 位工人，因为他的代价最小 [3,2,7,7,1,2] 。
第二轮雇佣，我们选择第 1 位工人，因为他们的代价与第 4 位工人一样都是最小代价，而且下标更小，[3,2,7,7,2] 。注意每一轮雇佣后，剩余工人的下标可能会发生变化。
如果剩余员工数目不足 candidates 人，那么下一轮雇佣他们中代价最小的一人，如果有多位代价相同且最小的工人，选择下标更小的一位工人。
一位工人只能被选择一次。
返回雇佣恰好 k 位工人的总代价。
 */

function totalCost(costs: number[], k: number, candidates: number): number {
  const n = costs.length
  if(candidates * 2 + k > n){
    let ans = 0
    costs.sort((a, b) => a - b);
    for (let i = 0; i < k; i++) {
      ans += costs[i];
    }
    return ans;
  }

  let leftArr = costs.slice(0, candidates).sort((a, b)=>a-b)
  let rightArr =  costs.slice(n - candidates, n).sort((a, b)=>a-b)
  let res = 0
  let i = candidates
  let j = n-1-candidates
  while (k--) {
    if(leftArr[0] <= rightArr[0]){
      res += parseInt('' + leftArr.shift())
        
      binaryInsert(leftArr, costs[i++])
    }else{
      res += parseInt('' + rightArr.shift())
      binaryInsert(rightArr, costs[j--])
    }
  }

  return res
}

function binaryInsert(arr: number[], num: number) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.ceil((right + left) / 2)
    if (arr[mid] < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  arr.splice(left, 0, num)
}

console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)) // 11
console.log(totalCost([1, 2, 4, 1], 3, 3)) // 4
console.log(totalCost([31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58], 11, 2)) // 423
console.log(totalCost([28, 35, 21, 13, 21, 72, 35, 52, 74, 92, 25, 65, 77, 1, 73, 32, 43, 68, 8, 100, 84, 80, 14, 88, 42, 53, 98, 69, 64, 40, 60, 23, 99, 83, 5, 21, 76, 34], 32, 12)) // 1407
console.log(totalCost([50, 80, 34, 9, 86, 20, 67, 94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3, 79, 38, 16, 44, 2, 54, 58], 7, 12)) // 95
console.log(totalCost([42,28,56,5,53,35,88,77,1,66,57,41,50,27,52,70,67,60,65,99,49,84,82,31,45,94,62,45,32,71,61,61,61,23,47,34], 11, 3)) // 385
