/**
 * 给你两个二维整数数组 items1 和 items2 ，表示两个物品集合。每个数组 items 有以下特质：

items[i] = [valuei, weighti] 其中 valuei 表示第 i 件物品的 价值 ，weighti 表示第 i 件物品的 重量 。
items 中每件物品的价值都是 唯一的 。
请你返回一个二维数组 ret，其中 ret[i] = [valuei, weighti]， weighti 是所有价值为 valuei 物品的 重量之和 。

注意：ret 应该按价值 升序 排序后返回。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/merge-similar-items
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
 var mergeSimilarItems = function(items1, items2) {
  items1.sort((a,b)=>a[0]-b[0])
  items2.sort((a,b)=>a[0]-b[0])
  var i = 0;
  var j = 0;
  var res = []
  while(i<items1.length || j<items2.length){
    var item1 = items1[i]
    var item2 = items2[j]

    if(!item1){
      res.push([item2[0], item2[1]])
      j++
      continue
    }
    if(!item2){
      res.push([item1[0], item1[1]])
      i++
      continue
    }

    if(item1[0] === item2[0]){
      res.push([item1[0], item1[1] + item2[1]])
      i++
      j++
      continue
    }
    if(item1[0] < item2[0]){
      res.push([item1[0], item1[1]])
      i++
    }else{
      res.push([item2[0], item2[1]])
      j++
    }
  }
  return res
};

console.log(mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]]))