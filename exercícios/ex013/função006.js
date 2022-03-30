const resultado = fizzBuzz(-4)
console.log(resultado)

function fizzBuzz (entrada) {
    if (typeof entrada !== "number")
    return "Não é um número"
    else if ((entrada % 3 === 0) && (entrada % 5 === 0))
    return "fizzBuzz"
    else if (entrada % 3 === 0)
    return "fizz"
    else if (entrada % 5 === 0)
    return "Buzz"
    else
    return "Não é um fizzBuzz"
}