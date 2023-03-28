function sum(...all){
    let result=0
    for(let num of all){
       result+=num
    }
    return result
}
const res=sum(20,4,5)
console.log(res)
