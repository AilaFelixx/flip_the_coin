//JOGUE A MOEDA

let moeda = document.getElementById('img_moeda')
let botao = document.getElementById('botao')
let resul = document.getElementById('cara_coroa')

moeda.addEventListener("click", clicar)
botao.addEventListener("click", clicar)

function clicar() {
    const sorteio = Math.floor(Math.random()* 10) + 1

    if (sorteio % 2 == 0) {
        resul.innerHTML = ('Cara')
        moeda.src = 'imagens/tails.svg'
    } else {
        resul.innerHTML = ('Coroa')
        moeda.src = 'imagens/heads.svg'
    }
}