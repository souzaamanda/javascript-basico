function tabuada () {
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert ('digite um numero!');
    } else {
        let n = Number(num.value);
        let c = 1
        tab.innerHTML = '';
        while (c <= 10) {
            let item = document.createElement('option') /*criando Option de forma dinamica*/
            item.text = `${n} x ${c} = ${n*c}`;
            tab.appendChild(item) /*adicionando um elemento filho que vai ser um item*/
            c++;
        }
    }
}


