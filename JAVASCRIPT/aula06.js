// let n1 = 1
// let n2 = "1"

// let v1={nome:"Sabrina"}
// let v2=v1

// console.log(v1===v2)

// let nome=prompt("Digite seu nome: ");
// console.log(nome);

if( navigator.userAgent.match(/Android/i)
||  navigator.userAgent.match(/webOS/i)
||  navigator.userAgent.match(/iPhone|iPad|iPod/i)
||  navigator.userAgent.match(/BlackBerry/i)
||  navigator.userAgent.match(/Windows Phone/i)
||  navigator.userAgent.match(/Opera Mini/i)
||  navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
}else{
    console.log("PC")
}