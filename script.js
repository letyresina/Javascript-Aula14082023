/* let chave = "chave"
localStorage.setItem(chave, 'Fiap')


let lerItem = localStorage.getItem(chave);

console.log(lerItem)

let array = [1,2,3,4,5,6,7,8]
localStorage.setItem("lista", array) */

//localStorage.clear();

let listaDados = [];
function Campos(campo1, campo2){ // construtor tem que começar com >letra maiuscula<
    this.campo1 = campo1
    this.campo2 = campo2
}

const btnEnviar = document.querySelector("#btnSubmit")

btnEnviar.addEventListener('click', ()=>{
    const inputCampo1 = document.querySelector("#campo1")
    const inputCampo2 = document.querySelector("#campo2")

    let info = new Campos(inputCampo1.value, inputCampo2.value)
    listaDados.push(info)

    localStorage.setItem('Dados', JSON.stringify(listaDados))

    console.log(listaDados)
})

localStorage.clear();

