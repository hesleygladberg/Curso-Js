function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML += ' <br>BOM DIA!!'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML += '<br> BOA TARDE!!'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        msg.innerHTML += '<br> BOA NOITE!!'
    }

}