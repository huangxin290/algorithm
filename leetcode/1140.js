/**
 * 爱丽丝和鲍勃继续他们的石子游戏。许多堆石子 排成一行，每堆都有正整数颗石子 piles[i]。游戏以谁手中的石子最多来决出胜负。

爱丽丝和鲍勃轮流进行，爱丽丝先开始。最初，M = 1。

在每个玩家的回合中，该玩家可以拿走剩下的 前 X 堆的所有石子，其中 1 <= X <= 2M。然后，令 M = max(M, X)。

游戏一直持续到所有石子都被拿走。

假设爱丽丝和鲍勃都发挥出最佳水平，返回爱丽丝可以得到的最大数量的石头。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/stone-game-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 看的题解，注意倒推和动态规划，时间复杂度是 n的三次方
dp【i】【m】是一个二维数组，记载的是在第i步，当M等于 m 时，能取到的最大的石子数量。同时sum是从第i堆到最后一堆的石子总数量。
例如对于示例：【2,7,9,4,4】。，因为是倒推，i从 len-1递减到0
* i = 4，此时只有最后一堆石子，总量是4,
	* 此时循环检测 m 从1到 len（更多的不用考虑，如果m比len还大，那我直接取全部石子了）
		* 如果i+2乘以m 》= len，说明可以全部取完，dp【i】【m】= sum
		* 如果小于则需要另外考虑。
因为 m 最小是1，所以 i = 3 和 i = 4 都是可以一次取完的，得到数组：（横坐标是i，从0到4）（纵坐标是m，从1到5）
0,0,0,8,4
0,0,0,8,4
0,0,0,8,4
0,0,0,8,4
0,0,0,8,4
* i = 2，此时sum = 9+4+4 = 17
	* m=1，此时 i+2乘以m  = 4，比5小，需要另外考虑了
		* 再来一个循环，x从1到 2乘以m
		* dp【i】【m】 = max（dp【i】【m】，sum - dp【i+x】【max（m，x）】）
		* 此时循环的x其实是 我取 x 堆后，下一次对手会取的数量（因为总是以最优解取石子）
		* 例如如果我只取一堆，x=1，那么对手就会在 第 i+1 堆取石子，并且此时 轮到他时，m可能变化了（如果我当前取的堆数大于m，毕竟能取1-2m堆），m只能往大了变，所以是max（m，x）
		* 最后返回 dp【0】【1】是因为 alice先取石子，所以是0，而初始m=1
 */

/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
  let len = piles.length
  let sum = 0
  var dp = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len + 1).fill(0)
  }
  for (let i = len - 1; i >= 0; i--) {
    sum += piles[i]
    for (let m = 1; m <= len; m++) {
      if (i + 2 * m >= len) {
        dp[i][m] = sum
      } else {
        for (let x = 1; x <= 2 * m; x++) {
          dp[i][m] = Math.max(dp[i][m], sum - dp[i + x][Math.max(m, x)])
        }
      }
    }
  }
  return dp[0][1]
}

console.log(stoneGameII([2, 7, 9, 4, 4])) // 10
