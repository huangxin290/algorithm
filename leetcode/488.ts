/**
 * 你正在参与祖玛游戏的一个变种。

在这个祖玛游戏变体中，桌面上有 一排 彩球，每个球的颜色可能是：红色 'R'、黄色 'Y'、蓝色 'B'、绿色 'G' 或白色 'W' 。你的手中也有一些彩球。

你的目标是 清空 桌面上所有的球。每一回合：

从你手上的彩球中选出 任意一颗 ，然后将其插入桌面上那一排球中：两球之间或这一排球的任一端。
接着，如果有出现 三个或者三个以上 且 颜色相同 的球相连的话，就把它们移除掉。
如果这种移除操作同样导致出现三个或者三个以上且颜色相同的球相连，则可以继续移除这些球，直到不再满足移除条件。
如果桌面上所有球都被移除，则认为你赢得本场游戏。
重复这个过程，直到你赢了游戏或者手中没有更多的球。
给你一个字符串 board ，表示桌面上最开始的那排球。另给你一个字符串 hand ，表示手里的彩球。请你按上述操作步骤移除掉桌上所有球，计算并返回所需的 最少 球数。如果不能移除桌上所有的球，返回 -1 。
 */

function findMinStep(board: string, hand: string): number {
  const handObj: { [key: string]: number } = {
    'R': 0,
    'Y': 0,
    'B': 0,
    'G': 0,
    'W': 0,
  }
  for (const x of hand) {
    handObj[x]++
  }
  let ans = Number.MAX_SAFE_INTEGER

  function dfs(board: string, handObj: { [key: string]: number }, actions: number): void {
    // 只有一个字符或者两个相同字符的情况
    if(board.length === 0){
      ans = Math.min(ans, actions)
    }else if (board.length === 1 && handObj[board[0]] >= 2) {
      ans = Math.min(ans, actions + 2)
    } else if (board.length === 2 && board[0] === board[1] && handObj[board[0]] >= 1) {
      ans = Math.min(ans, actions + 1)
    }
    const n = board.length
    // 广度优先搜索
    for (let i = 0; i < n; i++) {
      const char = board[i]
      // 两个相同字符
      if (i + 1 < n && board[i + 1] === char) {
        if (handObj[char] > 0) {
          handObj[char]--
          // 尝试消除此项

          dfs(dealWithBoard(board, i - 1, i + 2), handObj, actions + 1)
          handObj[char]++
        }
        i++ // 跳过下一个相同的
      } else {
        // 只有这一个字符
        if (handObj[char] > 1) {
          handObj[char] -= 2
          dfs(dealWithBoard(board, i - 1, i + 1), handObj, actions + 2)
          handObj[char] += 2
        }
      }
    }
  }

  function dealWithBoard(board: string, left: number, right: number): string {
    // 必须左右可以访问并且相等
    if (left >= 0 && right <= board.length - 1 && board[left] === board[right]) {
      // 左二右一/二
      if (left >= 1 && board[left] === board[left - 1]) {
        if (right <= board.length - 2 && board[right] === board[right + 1]) {
          return dealWithBoard(board, left - 2, right + 2)
        }
        return dealWithBoard(board, left - 2, right + 1)
      }
      // 或者左一右二
      if (right <= board.length - 2 && board[right] === board[right + 1]) {
        return dealWithBoard(board, left - 1, right + 2)
      }
    }
    // 都不成，说明没有可以消除的
    return board.substring(0, left + 1) + board.substring(right)

  }

  dfs(board, handObj, 0)
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans
};

// console.log(findMinStep("WRRBBW", "RB")) // -1
// console.log(findMinStep("WWRRBBWW", "WRBRW")) // 2
// console.log(findMinStep("G", "GGGGG")) // 2
// console.log(findMinStep("RBYYBBRRB", "YRBGB")) // 3
console.log(findMinStep("RRWWRRBBRR", "WB")) // 2



