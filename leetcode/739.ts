/**
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 */

function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const ans = new Array(n).fill(0)
  const st:number[] = []
  for(let i = 0;i<n;i++){
    const x = temperatures[i]
    while (st.length && x > temperatures[st[st.length - 1]]) {
      const index = st.pop() || 0
      ans[index] = i - index 
    }
    st.push(i)
  }
  return ans
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // [1,1,1,0]
console.log(dailyTemperatures([30,60,90])); // [1,1,0]
