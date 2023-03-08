const objs=document.getElementsByTagName("div")

let num=[10,20,30,40,50]

// for(let i=0;i<num.length;i++){
//     console.log(i + '-' + num[i])
// } pega as condições do array

// for(i in num){
//     console.log(i + '-' + num[i])
// }

for(i of num){
    console.log(i)
} //pega os elementos do array


for(o of objs){
    //console.log(o)
    console.log(o.innerHTML='Curso')
}

for(o in objs){
    console.log(objs[o].innerHTML)
}