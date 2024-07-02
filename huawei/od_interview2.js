// please define the JavaScript input here(you can also rewrite the input). 
// following is the default: 
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
  input += data;
});
process.stdin.on('end', () => {
  let inputArray = input.split('\n');
  // please finish the function body here.     
  // 处理第一行，得到n行m列，参数 l
  const n = parseInt(inputArray[0].split(' ')[0])
  const m = parseInt(inputArray[0].split(' ')[1])
  const l = parseInt(inputArray[0].split(' ')[2])
  const arr = []
  // 依次读取输入，得到数组arr：n*m
  for (let i = 1; i < n + 1; i++) {
    const row = []
    const inputRow = inputArray[i].split(' ')
    for (let j = 0; j < m; j++) {
      row.push(parseInt(inputRow[j]))
    }
    arr.push(row)
  }

  // i 是从第i行开始，到第i+l行
  function getMostBeauty(firstRow) {
    const result = []
    let subArr = []
    // 构建基础的 l * l数组
    for (let j = 0; j < l; j++) {
      // 纵向放入，方便后续滑动时删除前l个数
      for (let i = firstRow; i < firstRow + l; i++) {
        subArr.push(arr[i][j])
      }
    }
    result.push(Math.max(...subArr))
    let num = m - l
    while (num--) {
      // 减去左边竖行l个数
      
      subArr = subArr.slice(l)
      // 加上右边竖行l个数
      for (let j = 0; j < l; j++) {
        subArr.push(arr[firstRow + l][j])
      }
      // 求最大值
      result.push(Math.max(...subArr))
    }
    return result
  }

  const result = []
  // n行，就会得到 n-l行的所求结果数组
  for (let i = 0; i < n - l; i++) {
    result.push(getMostBeauty(i))
  }
  // 循环输出
  for (let i = 0; i < n - l; i++) {
    console.log(result[i].join(' '));
  }

  // please define the JavaScript output here. For example: console.log(result);
  process.exit();
});