pp = ['p2b6044','p2b6033','p2b6022','p2b6011']
console.log(pp)
pparray = []
for (i=0; i<pp.length; i++){
    const x = pp[i]
    ssss = x.split('')
    // console.log(ssss)
    pparray.push(ssss)
}
let abcdefg = []
for (k = 0; k<pparray.length; k++){
    delete pparray[k][1]
    let delete2array = pparray[k]
    abcdefg.push(delete2array)
}
YayFinallyDidIt = []
for (b=0; b<pp.length; b++){
    areyaar = abcdefg[b].join('')
    YayFinallyDidIt.push(areyaar)
}
console.log(YayFinallyDidIt)