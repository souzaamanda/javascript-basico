let num = document.getElementById('txtn')
let lista = document.getElementById('numadd')
let res = document.querySelector('div#res')
let valores = []

function ehnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
       console.log ('é um numero')
        return true
    } else {
        console.log (' n é um numero')
        return false
    }
}

function novoNumero (n, l){
    if(l.indexOf(Number(n)) != -1){ // não ta funcionando aqui!!
        console.log ('é novo numero')
        return true
    }else{
        console.log ('é  n novo numero')
        return false
    }
}

function adicionar(){
    if(ehnumero(num.value) && novoNumero(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option') 
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)

    }else{
        window.alert('valor inválido!')
    }

    num.value = ''
    num.focus()
}

function finalizar (){

}




// function adicionar (){ 
//     if (num.value.length == 0){
//         window.alert('digite um numero')
//     } else if(num.value == 0 || num.value > 100){
//         window.alert('digite um número entre 1 e 100')
//     } else{
//         let n = Number(num.value);

//         arr.push(n)
//         nadd.innerHTML ='';

//         let item = document.createElement('option') 
//         item.text = `O valor ${n} foi adicionado.`
//         tab.appendChild(item)
        

//     }       
// }
        
 