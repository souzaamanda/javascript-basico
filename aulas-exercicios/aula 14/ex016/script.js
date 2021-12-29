function contar(){
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pass')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       // window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando...<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }

        if (i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}