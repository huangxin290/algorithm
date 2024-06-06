/**
 * 给你两个正整数 n 和 limit 。

请你将 n 颗糖果分给 3 位小朋友，确保没有任何小朋友得到超过 limit 颗糖果，请你返回满足此条件下的 总方案数 。

所有方案数
相当于把 n 个无区别的小球放入 3 个有区别的盒子，允许空盒的方案数。

隔板法：假设 n 个球和 2 个隔板放到 n+2 个位置，第一个隔板前的球放入第一个盒子，第一个隔板和第二个隔板之间的球放入第二个盒子，第二个隔板后的球放入第三个盒子。那么从 n+2 个位置中选 2 个位置放隔板，有 C(n+2,2) 种放法。

注意隔板可以放在最左边或最右边，也可以连续放，对应着空盒的情况。例如第一个隔板放在最左边，意味着第一个盒子是空的；又例如第一个隔板和第二个隔板相邻，意味着第二个盒子是空的。

不合法的方案数为「至少一个」减去「至少两个」加上「三个」，这就是容斥原理。

C(n+2,2)−3⋅C(n−limit+1,2)+3⋅C(n−2⋅limit,2)−C(n−3⋅limit−1,2)

作者：灵茶山艾府
链接：https://leetcode.cn/problems/distribute-candies-among-children-i/solutions/2522970/o1-rong-chi-yuan-li-pythonjavacgo-by-end-smj5/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

function distributeCandies(n: number, limit: number): number {
  function c2(n: number): number {
    return n > 1 ? n * (n - 1) / 2 : 0
  }
  return c2(n + 2) - 3 * c2(n - (limit + 1) + 2) + 3 * c2(n - 2 * (limit + 1) + 2) - c2(n - 3 * (limit + 1) + 2)
};

console.log(distributeCandies(5, 2)) // 3
console.log(distributeCandies(3, 3)) // 10
