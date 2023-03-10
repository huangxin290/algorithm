/**
 * 一个公司准备组织一场会议，邀请名单上有 n 位员工。公司准备了一张 圆形 的桌子，可以坐下 任意数目 的员工。

员工编号为 0 到 n - 1 。每位员工都有一位 喜欢 的员工，每位员工 当且仅当 他被安排在喜欢员工的旁边，他才会参加会议。每位员工喜欢的员工 不会 是他自己。

给你一个下标从 0 开始的整数数组 favorite ，其中 favorite[i] 表示第 i 位员工喜欢的员工。请你返回参加会议的 最多员工数目 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/maximum-employees-to-be-invited-to-a-meeting
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
  var len = favorite.length
  var dogLover = []
  var singleDog = []
  var linkDogMap = {}
  for (let i = 0; i < len; i++) {
    if (dogLover.indexOf(i) > -1) {
      continue
    }
    if (favorite[favorite[i]] === i) {
      dogLover.push(i)
      dogLover.push(favorite[i])
    } else {
      singleDog.push(i)
      if (!linkDogMap[favorite[i]]) {
        linkDogMap[favorite[i]] = [i]
      } else {
        linkDogMap[favorite[i]].push(i)
      }
    }
  }
  var res = 0
  // 狗情侣们一定能围成圈
  for (let i = 0; i < dogLover.length; i++) {
    res += getMaxLinkDogLength(dogLover[i], linkDogMap)
  }
  for (let key in linkDogMap) {
    res = Math.max(res, getLinkDogCirle(key, key, linkDogMap))
  }

  return res
}

function getMaxLinkDogLength(person, linkDogMap) {
  var num = 1
  var linkDogs = linkDogMap[person]
  if (linkDogs) {
    var maxLength = 0
    for (let i = 0; i < linkDogs.length; i++) {
      maxLength = Math.max(maxLength, getMaxLinkDogLength(linkDogs[i], linkDogMap))
    }
    num += maxLength
  }
  delete linkDogMap[person]
  return num
}

function getLinkDogCirle(firstKey, key, linkDogMap) {
  var num = 1
  var linkDogs = linkDogMap[key]
  if (linkDogs) {
    var maxLength = 0
    for (let i = 0; i < linkDogs.length; i++) {
      if (Number(linkDogs[i]) !== Number(firstKey)) {
        maxLength = Math.max(maxLength, getLinkDogCirle(firstKey, linkDogs[i], linkDogMap))
      } else {
        return 1
      }
    }
    if (maxLength) {
      num += maxLength
    } else {
      num = 0
    }
  } else {
    num = 0
  }
  delete linkDogMap[key]
  return num
}

console.log(maximumInvitations([1, 2, 0])) // 3
console.log(maximumInvitations([3, 0, 1, 4, 1])) // 4
console.log(maximumInvitations([8, 3, 4, 8, 0, 6, 7, 0, 5])) // 5
console.log(maximumInvitations([19, 20, 16, 11, 18, 6, 7, 1, 16, 3, 7, 2, 1, 7, 0, 6, 13, 14, 20, 20, 15])) // 4
