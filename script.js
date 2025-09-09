const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em que ano o Brasil se tornou independente de Portugal?",
        alternativas: [
            "1822",
            "1889"
        ]
    },
    {
        enunciado: "Quem foi o líder da Revolução Cubana?",
        alternativas: [
            "Fidel Castro",
            "Che Guevara"
        ]
    },
    {
        enunciado: "Qual imperador romano declarou o cristianismo como religião oficial do império?",
        alternativas: [
            "Constantino",
            "Nero"
        ]
    },
    {
        enunciado: "A queda de qual muro marcou o fim da Guerra Fria?",
        alternativas: [
            "Muro da China",
            "Muro de Berlim"
        ]
    },
    {
        enunciado: "Qual foi o principal motivo da Guerra do Vietnã?",
        alternativas: [
            "Disputa por territórios",
            "Luta contra a expansão do comunismo"
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener ("click", () => respondeSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respondeSelecionada (opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();