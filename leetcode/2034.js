/**
 * 给你一支股票价格的数据流。数据流中每一条记录包含一个 时间戳 和该时间点股票对应的 价格 。

不巧的是，由于股票市场内在的波动性，股票价格记录可能不是按时间顺序到来的。某些情况下，有的记录可能是错的。如果两个有相同时间戳的记录出现在数据流中，前一条记录视为错误记录，后出现的记录 更正 前一条错误的记录。

请你设计一个算法，实现：

更新 股票在某一时间戳的股票价格，如果有之前同一时间戳的价格，这一操作将 更正 之前的错误价格。
找到当前记录里 最新股票价格 。最新股票价格 定义为时间戳最晚的股票价格。
找到当前记录里股票的 最高价格 。
找到当前记录里股票的 最低价格 。
请你实现 StockPrice 类：

StockPrice() 初始化对象，当前无股票价格记录。
void update(int timestamp, int price) 在时间点 timestamp 更新股票价格为 price 。
int current() 返回股票 最新价格 。
int maximum() 返回股票 最高价格 。
int minimum() 返回股票 最低价格 。
 */

var StockPrice = function() {
  this.priceMap = {}
  this.max = Number.MIN_SAFE_INTEGER // 记录数值
  this.min = Number.MAX_SAFE_INTEGER // 记录数值
  this.currentTime = 0 // 记录时间戳
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
  if(Object.prototype.hasOwnProperty.call(this.priceMap, timestamp)){
    // 已有该时间戳
    var beforeValue = this.priceMap[timestamp]
    this.priceMap[timestamp] = price
    if(beforeValue === this.max){
      this.max = Number.MIN_SAFE_INTEGER
      Object.values(this.priceMap).map(val=>{
        if(val > this.max){
          this.max = val
        }
      })
    }
    if(beforeValue === this.min){
      this.min = Number.MAX_SAFE_INTEGER
      Object.values(this.priceMap).map(val=>{
        if(val < this.min){
          this.min = val
        }
      })
    }
  }else{
    this.priceMap[timestamp] = price
    if(this.currentTime < timestamp){
      this.currentTime = timestamp
    }
  }
  if(this.max < price){
    this.max = price
  }
  if(this.min > price){
    this.min = price
  }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
  return this.priceMap[this.currentTime]
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
  return this.max
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
  return this.min
};

/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */