//criar referencia ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    e.preventDefault() //evita envio do form

    const nome = frm.inNome.value //obtém valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso //declara a variável peso
    if(masculino){
        peso = 22 * Math.pow(altura, 2) //math.pow eleva ao quadrado
    }else{
        peso = 21 * Math.pow(altura, 2)
    }

    //apresenta a resposta (altera o conteúdo do elemento h3 da pagina)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} Kg`
    resp.style.color = "blue"

    frm.addEventListener("reset", () =>{
        resp.innerText = "" //Limpar o conteúdo do elemento h3 que exibe a resposta
    })
})