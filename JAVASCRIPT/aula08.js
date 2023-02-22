//1010 = 10
//1011 = 11

//operador "and"
let n1=10
let n2=11

let res = n1 & n2

console.log(res)

//operador "or"
let n3 = 10
let n4 = 11

let res2 = n3 | n4

console.log(res2)

// operador "só"
let n5 = 10
let n6 = 11

let res3 = n5 ^ n6 //só retorna 1 onde tiver 1, onde tiver equivalência retorna 0
//1010 = 10
//1011 = 11
//0001 = 10^11 = 1

console.log(res3)

//operador "deslocamento"
let n7 = 10

let res4 = n7 << 1 //desloca 1 bit para a esquerda, faz dobrar o valor 
//1010 = 10100
let res5 = n7 >> 1 //desloca 1 bit para a direita, divide o valor pela metade
//1010 = 0101

console.log(res4)
console.log(res5)