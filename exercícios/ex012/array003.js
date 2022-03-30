var num = [1, 3, 4, 6, 7, 5]
num.sort()
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
var pos = num.indexOf(5)
console.log(`O valor 5 está na posição ${pos}`)