const frm = document.querySelector("form") //obtém elemento da pagina
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" //string com a resposta a ser exibida
let numContas = 0 //inicializa contador
let valTotal = 0 //e acumulador (variáveis globais)

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal = valTotal + valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta}----------------`
    resp2.innerText = `${numContas}Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()

})