//variavéis pegar as informações do ID que esta no html
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//Variaveis do MODAL
const modal = {

    //propriedade e valores
    wrapper: document.querySelector('.modal-wrapper'), //abrir e fechar modal
    message: document.querySelector('.modal .title span'), //mensagem 
    btnClose: document.querySelector('.modal button.close'),
    
    //short hander
    open() {
        modal.wrapper.classList.add('open')
    },
    close() {
        modal.wrapper.classList.remove('open')
    }
}


// 3 maneiras de criar e atribuir função a um evento
form.onsubmit = function (event) {
    event.preventDefault() //evite o padrão

    const weight = inputWeight.value //Pegar o valor de Weight que foi colocado no input
    const height = inputHeight.value //Pegar o valor de height que foi colocado no input

    const result = IMC(weight, height)// Constante criada para saber qual resultado entre weight e height
    const message = `Seu IMC é de ${result}` //Mensagem que aparecerá no modal nova

    modal.message.innerText = message//mensagem aparece 
    modal.open()

    // modalWrapper.classList.add('open')// abre o modal

}

//fechar o modal após o resultado aparecer na tela
modal.btnClose.onclick = () => {
    // modalWrapper.classList.remove('open') //fecha o modal
    modal.close()
}

//Função que executa o calculo do IMC
function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}