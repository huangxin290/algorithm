/**
 * 现有一个包含所有正整数的集合 [1, 2, 3, 4, 5, ...] 。

实现 SmallestInfiniteSet 类：

SmallestInfiniteSet() 初始化 SmallestInfiniteSet 对象以包含 所有 正整数。
int popSmallest() 移除 并返回该无限集中的最小整数。
void addBack(int num) 如果正整数 num 不 存在于无限集中，则将一个 num 添加 到该无限集最后。
 */


var SmallestInfiniteSet = function() {
  this.currentMin = 1
  this.addMap = {}
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  const addArr = Object.keys(this.addMap)
  if(!addArr.length){
    const res = this.currentMin
    this.currentMin ++
    return res
  }else{
    const min = Math.min(...addArr)
    delete this.addMap[min]
    return min
  }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if(this.currentMin <= num){
    return
  }
  this.addMap[num] = true
  while (this.addMap[this.currentMin-1]) {
    this.currentMin --
    delete this.addMap[this.currentMin]
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */