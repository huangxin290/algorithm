/**
 * 给你一个下标从 0 开始、大小为 m x n 的矩阵 grid ，矩阵由若干 正 整数组成。

你可以从矩阵第一列中的 任一 单元格出发，按以下方式遍历 grid ：

从单元格 (row, col) 可以移动到 (row - 1, col + 1)、(row, col + 1) 和 (row + 1, col + 1) 三个单元格中任一满足值 严格 大于当前单元格的单元格。
返回你在矩阵中能够 移动 的 最大 次数。
 */

function maxMoves(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const cache: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(-1))

  function dfs(i: number, j: number, val: number): number {
    if (i < 0 || i >= m || j >= n || grid[i][j] <= val) {
      return -1
    }
    if (cache[i][j] !== -1) {
      return cache[i][j]
    }
    const newVal = grid[i][j]
    return cache[i][j] = Math.max(dfs(i - 1, j + 1, newVal), dfs(i + 1, j + 1, newVal), dfs(i, j + 1, newVal)) + 1
  }
  let res = 0
  for(let i=0;i<m;i++){
    res = Math.max(res, dfs(i, 0, 0))
  }

  return res
};

console.log(maxMoves([[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]])) // 3
console.log(maxMoves([[3, 2, 4], [2, 1, 9], [1, 1, 7]])) // 0
console.log(maxMoves([[1000000, 92910, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068], [1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118]])) // 49
