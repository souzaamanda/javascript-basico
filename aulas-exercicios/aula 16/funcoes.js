function parImpar (n){
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parImpar(4)
console.log(res)

/* ou
console.log(parImpar(4))*/

let v = function(x){ //variavel recebe uma função 
    return x*2;
}

console.log (v(5)) // passou para a variavel um parametro

// RECURSIVIDADE - uma função que dentro dela tem uma chamada pra ela mesma
function fatorial (n) {
    if ( n == 0){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log (fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
n! = 1
*/