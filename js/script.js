//Fazer com que o carousel não troque de slides automaticamente
$('.carousel').carousel({
    interval: 0
})

const nextButton = document.querySelector('.carousel-control-next')
const btnAdesao = document.querySelector('#btn-adesao')
const ultimoIndicador = document.querySelector('#ultimo-indicador')

//Contar as vezes que o usuário clicou para passar o slide
let contador = 0

function liberarBotao(valorContador){
    if (valorContador == 2) btnAdesao.disabled = false
}

nextButton.addEventListener(`click`, () => {
    contador++
    liberarBotao(contador)
})

//Ativar 
ultimoIndicador.addEventListener('click', () => btnAdesao.disabled = false)