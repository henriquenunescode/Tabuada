# Gerador de Tabuada

Projeto simples de gerador de tabuada feito com HTML, CSS e JavaScript puro, desenvolvido como exercício de curso.

## Como funciona

O usuário digita um número entre **-99 e 99** no campo de texto e clica em **Gerar** ou pressiona **Enter**. O JavaScript calcula a tabuada daquele número (de 1 a 10) e exibe os resultados em um `<select>`, substituindo o conteúdo de exemplo que já estava no HTML.

Após gerar, o campo é limpo automaticamente e o foco retorna para ele, permitindo digitar outro número sem precisar clicar novamente.

## Estrutura
Tabuada/
├── index.html   — estrutura da página
├── style.css    — estilização visual
└── script.js    — lógica de geração da tabuada

## Detalhes do JavaScript

- A lógica principal está na função `gerarTabuada()`, chamada tanto pelo clique no botão **Gerar** quanto ao pressionar **Enter** no campo de texto
- Se o campo estiver vazio, o `<select>` exibe a mensagem "Campo Vazio!" e o `size` é reduzido para 1
- Se o número digitado estiver fora do intervalo permitido (-99 a 99), o `<select>` exibe a mensagem "Use entre -99 e 99!" e o `size` é reduzido para 1
- Se o campo tiver um valor válido, o `size` volta para 11, e a tabuada é gerada com um loop de 1 a 10
- Cada linha da tabuada é criada com `createElement("option")` e adicionada com `appendChild`, evitando o uso de `innerHTML +=` dentro do loop

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)