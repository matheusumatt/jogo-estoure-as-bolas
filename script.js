function nRand(num){
    return Math.floor(Math.random() * num)
}

let bolas = 0
let bolasEstouradas = 0

function addBola() {
	let bola = document.createElement('div')
	bola.setAttribute('class', 'bola')

	let pLeft = nRand(500)
	let pTop = nRand(400)

	bola.setAttribute('style', `left: ${pLeft}px; top: ${pTop}px;`)

	bola.setAttribute('onclick', 'estourar(this)')
	
	document.querySelector('.containerBolas').appendChild(bola)

	bolas++
	document.querySelector('.btn-bolas').innerHTML = `Bolas: ${bolas}`
}

function estourar(elemento) {
	document.querySelector('.containerBolas').removeChild(elemento)
	bolasEstouradas++
	document.querySelector('.bolas-estouradas').innerHTML = `Bolas estouradas: ${bolasEstouradas}`
}

function iniciar() {

	// remove todas as bolas
	while (document.querySelector('.containerBolas').firstChild) {
  		document.querySelector('.containerBolas').removeChild(document.querySelector('.containerBolas').firstChild);
	}

	// ao iniciar o jogo, retornamos os valores exibidos de bolas e bolas estouradas para zero
	document.querySelector('.btn-bolas').innerHTML = 'Bolas: 0'
	document.querySelector('.bolas-estouradas').innerHTML = 'Bolas estouradas: 0'
	// e zeramos os valores das variáveis para não continuar contando de onde parou
	// caso o usuário esteja iniciando o jogo pela segunda vez, por exemplo
	bolas = 0
	bolasEstouradas = 0

	// verifica se o intervalo já existe
	if ( typeof intervalo !== 'undefined') {
		clearInterval(intervalo) // se existir limpamos ele
	}
	
	intervalo = setInterval(addBola, 1000) // iniciar o intervalor, para fazer uma bola aparecer
	// a cada 1s, ou 1000 milisegundos
}
function parar() {
	// remove todas as bolas
	while (document.querySelector('.containerBolas').firstChild) {
  		document.querySelector('.containerBolas').removeChild(document.querySelector('.containerBolas').firstChild);
	}

	// limpa o intervalo
	clearInterval(intervalo)
}
/*
	melhorar jogo

	1. colocar bolas coloridas
	
	2. limitar número de bolas na tela
		ex: se não conseguir estourar e ficar 10 bolas na tela ao mesmo tempo perde

*/