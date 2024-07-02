function oneByOne(arr){
  if(arr.length > 1){
    return new Promise((resolve)=>{
      arr[0].then(()=>{
        resolve()
      })
    }).then(()=>{
      new Promise.oneByOne(arr.splice(0, 1))
    })
  }
}

Promise.oneByOne = oneByOne

function generatePromise(str){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(str);
      resolve()
    }, 1000)
  })
}

Promise.oneByOne([generatePromise('p1'), generatePromise('p2'), generatePromise('p3')])
