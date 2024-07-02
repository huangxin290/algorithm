var dobounce = function(callback, time){
  let currTime = 0
  return function (args){
    if(!currTime){ // 第一次不触发
      currTime = Date.now()
    }
    const nowTime = Date.now()
    if(nowTime - currTime < time){
      return
    }
    currTime = nowTime
    callback(args)
  }
}

function test(param1){
  console.log('aaa', param1)
}

test = dobounce(test, 1000)

test(1)
test(2)
test(3)

setTimeout(()=>{
  test(4)
}, 1000)