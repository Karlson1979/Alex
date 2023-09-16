// Array.prototype.forEach2=function (fn){
//     for (let i =0; i<this.length; i=i+1){
//         fn(this[i], i, this)
//     }
// }

// const arr=[1,2,3,4,5,6]
// arr.forEach2((e,i,arr)=>console.log(e,i,arr))
// arr.map((el)=>console.log(el+1))

// function fn5(fn1,fn4){
   
//    return fn1()+fn4()
// }
// const fn1=()=>10
//    const fn4=()=>20
// console.log(fn5(fn1,fn4))

function fn(f1,f2){
    return{
        res:'name1',
        res2:'surname'
    }
}
const f1=()=>'name1'
const f2=()=> 'surname'
console.log(fn(f1(),f2()))

function fn5(a,b){
    return (a.toString().length+ b.toString().length)
}
console.log(fn5(100,34))