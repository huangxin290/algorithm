/**
 * 你的笔记本键盘存在故障，每当你在上面输入字符 'i' 时，它会反转你所写的字符串。而输入其他字符则可以正常工作。

给你一个下标从 0 开始的字符串 s ，请你用故障键盘依次输入每个字符。

返回最终笔记本屏幕上输出的字符串。
 */

function finalString(s: string): string {
  const res:string[] = []
  let isNormalDira = true
  for(let i=0,len=s.length;i<len;i++){
    const char = s[i]
    if(char === 'i'){
      isNormalDira = !isNormalDira
    }else{
      if(isNormalDira){
        res.push(char)
      }else{
        res.splice(0, 0, char)
      }
    }
  }
  if(!isNormalDira){
    res.reverse()
  }
  return res.join('')
};

console.log(finalString('string'));// rtsng
console.log(finalString('poiinter'));// ponter
