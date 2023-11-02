/**
 * 给你一个整数数组 gifts ，表示各堆礼物的数量。每一秒，你需要执行以下操作：

选择礼物数量最多的那一堆。
如果不止一堆都符合礼物数量最多，从中选择任一堆即可。
选中的那一堆留下平方根数量的礼物（向下取整），取走其他的礼物。
返回在 k 秒后剩下的礼物数量。
 */

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
  gifts.sort((a,b)=>b-a)
  while (k>0) {
    k--
    const num = Math.floor(Math.sqrt(gifts[0]))
    const index = gifts.findIndex(a=>a<num)
    if(index === -1){
      // 找不到说明变成了最小的，则直接放到最后
      gifts.splice(0, 1)
      gifts.push(num)
    }else{
      gifts.splice(index, 0, num)
      gifts.splice(0, 1)
    }
  }
  let res = 0
  gifts.map(a=>res += a)
  return res
};

console.log(pickGifts([25,64,9,4,100], 4)) // 29