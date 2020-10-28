/*EJERCICIO 2
A) Imprimí todos los números entre -20 y 30
B) Imprimí todos los números pares entre 20 y 60
C) Imprimí todos los números impares entre 600 y 666
D) Imprimí todos los números primos entre 1 y 150*/

console.log("A) Imprimi todos los números entre -20 y 30")
let num = -20
while(num <= 30){
	console.log(num)
	num++
}


console.log("B) Imprimi todos los numeros pares entre 20 y 60")
num = 20
while(num <= 60){
	if (!(num % 2)){
		console.log(num)
	}
	num++
}


console.log("C) Imprimi todos los numeros impares entre 600 y 666")
num = 600
while(num <= 666){
	if (num % 2){
		console.log(num)
	}
	num++
}

console.log("D) Imprimi todos los numeros primos entre 1 y 150")
num = 1
let flag = 0
while(num <= 150){
	for (let i = 2; i < num; i++) {
		if (num % i === 0){
			flag = 1
		}
	}
	if(flag === 0){
		console.log(num)
	}else{
		flag = 0
	}
	num++
}