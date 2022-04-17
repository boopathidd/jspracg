var Kms = [10,20,30,90,60]
Kms.sort(function(a,b){
    return a-b
})
console.log(Kms)


var Kms = [10,20,30,90,60]
Kms.sort((a,b)=>a-b)
console.log(Kms)
console.log(Kms.includes(10))