let num = [5, 8, 2, 9, 3];

console.log (`O vetor tem ${num.length} posições`);
console.log (num[0]);

// percurso para exibição em vetores
// for (let pos = 0; pos < num.length; pos++) {
//     console.log (`a Posição ${pos} tem o valor ${num[pos]}`)
// }

// percurso para exibição em vetores simplificado
for(let pos in num) {
    console.log (`a Posição ${pos} tem o valor ${num[pos]}`)
}


