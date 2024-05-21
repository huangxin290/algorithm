/**
 * 在神秘的地牢中，n 个魔法师站成一排。每个魔法师都拥有一个属性，这个属性可以给你提供能量。有些魔法师可能会给你负能量，即从你身上吸取能量。

你被施加了一种诅咒，当你从魔法师 i 处吸收能量后，你将被立即传送到魔法师 (i + k) 处。这一过程将重复进行，直到你到达一个不存在 (i + k) 的魔法师为止。

换句话说，你将选择一个起点，然后以 k 为间隔跳跃，直到到达魔法师序列的末端，在过程中吸收所有的能量。

给定一个数组 energy 和一个整数k，返回你能获得的 最大 能量。
 */

function maximumEnergy(energy: number[], k: number): number {
  const arr = new Array(k).fill(0).map(()=>new Array(0))
  let maxVal = Number.MIN_SAFE_INTEGER
  energy.reverse().map((val, index)=>{
    const currArr = arr[index%k]
    const newVal = (currArr.length ? currArr[currArr.length - 1] : 0 ) + val
    currArr.push(newVal)
    maxVal = Math.max(maxVal, newVal)
  })
  return maxVal
};

console.log(maximumEnergy([5,2,-10,-5,1], 3)); // 3
console.log(maximumEnergy([-2,-3,-1], 2)); // -1
