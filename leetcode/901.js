/**
 * 计一个算法收集某些股票的每日报价，并返回该股票当日价格的 跨度 。

当日股票价格的 跨度 被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

例如，如果未来 7 天股票的价格是 [100,80,60,70,60,75,85]，那么股票跨度将是 [1,1,1,2,1,4,6] 。

实现 StockSpanner 类：

StockSpanner() 初始化类对象。
int next(int price) 给出今天的股价 price ，返回该股票当日价格的 跨度 。
 */


var StockSpanner = function() {
  this.prices = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.prices.push(price)
  let res = 1
  for(let i=this.prices.length-2;i>=0;i--){
    if(this.prices[i] <= price){
      res ++
    }else{
      break
    }
  }
  return res
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */