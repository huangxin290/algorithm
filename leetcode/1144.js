/**
 * 给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。

如果符合下列情况之一，则数组 A 就是 锯齿数组：

每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
返回将数组 nums 转换为锯齿数组所需的最小操作次数。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

因为只能减小，所以要么减少奇数索引的使之比偶数索引的都小，要么减少偶数索引的使之比奇数索引的都小
 */
var movesToMakeZigzag = function(nums) {
  const len = nums.length
  var changeOddCount = 0
  var changeEvenCount = 0
  var flag = true
  for(let i=0;i<len;i++){
    var num = nums[i]
    var deleteCount = 0
    if(i>0 && num >= nums[i-1]){
      deleteCount = num - nums[i-1] + 1
    }
    if(i<len-1 && num >= nums[i+1]){
      deleteCount = Math.max(num - nums[i+1] + 1, deleteCount)
    }

    if(flag){
      changeEvenCount += deleteCount
    }else{
      changeOddCount += deleteCount
    }

    flag = !flag
  }
  return Math.min(changeEvenCount, changeOddCount)
};

console.log(movesToMakeZigzag([10,4,4,10,10,6,2,3]))