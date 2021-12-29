function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] tente noamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //colocanco imagem dinamicamente através do JS
        img.setAttribute('id','foto') // isso é a mesma coisa que <img id='foto'> do HTML
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'fotomenino.png')
            }else if (idade < 29){
                //jovem
                img.setAttribute('src', 'fotohomemjovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotohomemadulto.png')
            }else {
                //idoso
                img.setAttribute('src','fotoidoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'fotomenina.png')
            }else if (idade < 29){
                //jovem
                img.setAttribute('src', 'fotomulherjovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'fotomulheradulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}