// Seleciona os elementos do HTML pelos seus IDs
const numero = document.querySelector('#numero')
const selectTabuada = document.querySelector('#selectTabuada')
const button = document.querySelector('#btnGerar')

// Função que gera a tabuada (usada tanto no clique quanto no Enter)
function gerarTabuada() {

    // Converte o valor do campo de texto em número
    let n = Number(numero.value)

    // Verifica se o campo está vazio
    if (numero.value.length == 0) {
        selectTabuada.setAttribute('size', 1) // Reduz o select para mostrar só 1 linha
        selectTabuada.innerHTML = "<option>Campo Vazio!</option>" // Exibe mensagem de aviso
        return  // Interrompe a execução aqui, sem gerar a tabuada
    }

    // Verifica se o número está fora do intervalo permitido
    if (n < -99 || n > 99) {
        selectTabuada.setAttribute('size', 1) // Reduz o select para mostrar só 1 linha
        selectTabuada.innerHTML = "<option>-99 < x < 99</option>" // Exibe mensagem de aviso
        return  // Interrompe a execução aqui, sem gerar a tabuada
    }

    // Restaura o tamanho original do select (11 linhas visíveis)
    selectTabuada.setAttribute('size', 11)

    // Limpa o conteúdo anterior e coloca o cabeçalho "Resultado:"
    selectTabuada.innerHTML = "<option>Resultado:</option>"

    // Loop que gera as 10 linhas da tabuada
    for (let i = 1; i <= 10; i++) {

        // Monta o texto de cada linha, ex: "7 x 3 = 21"
        let result = n + " x " + i + " = " + n * i

        // Cria um novo elemento <option> para cada linha
        let option = document.createElement("option")

        // Define o texto do option com o resultado calculado
        option.textContent = result

        // Adiciona o option ao select
        selectTabuada.appendChild(option)
    }

    // Limpa o campo de texto após gerar a tabuada
    numero.value = ""

    // Retorna o foco ao campo para o usuário digitar outro número
    numero.focus()
}

// Aguarda o clique no botão para executar a função
button.addEventListener("click", gerarTabuada)

// Aguarda o Enter no campo de texto para executar a função
numero.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        gerarTabuada()
    }
})