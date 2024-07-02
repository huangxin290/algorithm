const charStr = 'abcdefghijklmnopqrstuvwxyz'

function encode(str: string){
  const n = str.length
  const f = new Array(n).fill(1)
  for(let i=2;i<n;i++){
    f[i] = (f[i-1] + f[i-2]) % 26
  }

  let res = ''
  for(let i=0;i<n;i++){
    res += encodeChar(str[i], i)
  }

  function encodeChar(s: string, i:number):string{
    const isUpper = charStr.indexOf(s) === -1
    if(isUpper){
      s = s.toLocaleLowerCase()
    }
    let index = charStr.indexOf(s)
    index = (index + f[i]) % 26
    return isUpper ? charStr[index].toLocaleUpperCase() : charStr[index]
  }

  return res
}




console.log(encode('uvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdvuvwxyzaidvbcuabvufsebvufsbvsfdvbfshuvbufsdbvhufdsbvhufdsbvhufbdv')); // vwyadh
console.log(encode('ABcde')); // BCegj
