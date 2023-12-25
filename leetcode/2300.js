/**
 * 给你两个正整数数组 spells 和 potions ，长度分别为 n 和 m ，其中 spells[i] 表示第 i 个咒语的能量强度，potions[j] 表示第 j 瓶药水的能量强度。

同时给你一个整数 success 。一个咒语和药水的能量强度 相乘 如果 大于等于 success ，那么它们视为一对 成功 的组合。

请你返回一个长度为 n 的整数数组 pairs，其中 pairs[i] 是能跟第 i 个咒语成功组合的 药水 数目。
 */

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a,b)=>a-b)
  const n = spells.length
  const res = []
  for(let i=0;i<n;i++){
    const num = Math.ceil(success/spells[i])
    res.push(binaryFind(potions, num))
  }
};

/**
 * 在数组中找寻应该插入的位置，使得后面的数都大于等于插入的数
 * @param {array} potions 已升序排序
 * @param {number} num 插入的数字
 */
function binaryFind(potions, num){
  let min = 0
  let max = potions.length-1
  while (min<max) {
    let middle = Math.ceil((max+min)/2)
    if(potions[middle]>=num){
      max = middle
    }
    min = middle
  }
}