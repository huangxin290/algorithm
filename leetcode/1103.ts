/**
 * 排排坐，分糖果。

我们买了一些糖果 candies，打算把它们分给排好队的 n = num_people 个小朋友。

给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 n 颗糖果。

然后，我们再回到队伍的起点，给第一个小朋友 n + 1 颗糖果，第二个小朋友 n + 2 颗，依此类推，直到给最后一个小朋友 2 * n 颗糖果。

重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。

返回一个长度为 num_people、元素之和为 candies 的数组，以表示糖果的最终分发情况（即 ans[i] 表示第 i 个小朋友分到的糖果数）。
 */

function distributeCandies(candies: number, num_people: number): number[] {
  const res = new Array(num_people).fill(0)
  let num = 1
  let index = 0
  while (candies > 0) {
    const currNum = candies >= num ? num : candies
    res[index] += currNum
    index ++
    if(index>=num_people){
      index = 0
    }
    num ++
    candies -= currNum
  }
  return res
};

console.log(distributeCandies(7, 4)); // [1,2,3,1]
console.log(distributeCandies(10, 3)); // [5,2,3]
