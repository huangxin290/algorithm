/**
 * 小扣当前位于魔塔游戏第一层，共有 N 个房间，编号为 0 ~ N-1。每个房间的补血道具/怪物对于血量影响记于数组 nums，其中正数表示道具补血数值，即血量增加对应数值；负数表示怪物造成伤害值，即血量减少对应数值；0 表示房间对血量无影响。

小扣初始血量为 1，且无上限。假定小扣原计划按房间编号升序访问所有房间补血/打怪，为保证血量始终为正值，小扣需对房间访问顺序进行调整，每次仅能将一个怪物房间（负数的房间）调整至访问顺序末尾。请返回小扣最少需要调整几次，才能顺利访问所有房间。若调整顺序也无法访问完全部房间，请返回 -1。
 */

function magicTower(nums: number[]): number {
  let changeTime = 0 // 调整的次数
  let score = 1
  const n = nums.length

  let sum = 1
  for(let i=0;i<n;i++){
    sum+=nums[i]
  }
  if(sum<=0){
    return -1
  }

  class MinPriorityQueue{
    items: number[];
    constructor(){
      this.items = []
    }

    enqueue(el:number){
      let l = 0
      let r = this.items.length - 1
      while (l <= r) {
        const middle = Math.floor((l + r)/2)
        if(el < this.items[middle]){
          r = middle - 1
        }else{
          l = middle + 1
        }
      }
      this.items.splice(l, 0, el)
    }

    dequeue():number{
      return this.items.shift() || 0
    }

    size(){
      return this.items.length
    }
  }
  const minScore = new MinPriorityQueue()
  for(const num of nums) {
    if(num < 0){
      minScore.enqueue(num)
    }
    score+=num
    if(score < 1){
      if(minScore.size()){
        score -= minScore.dequeue()
        changeTime ++
      }
    }
  }
  return changeTime
};

console.log(magicTower([100,100,100,-250,-60,-140,-50,-50,100,150])); // 1
console.log(magicTower([-200,-300,400,0])); // -1
