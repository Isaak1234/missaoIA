const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em que ano o Brasil se tornou independente de Portugal?",
        alternativas: [
            {
            texto:"1822",
            afirmacao:"1889"
            }
        ]
    },
    {
        enunciado: "Quem foi o líder da Revolução Cubana?",
        alternativas: [
            {
            texto:"Fidel Castro",
            afirmacao:"Che Guevara"
            }
        ]
    },
    {
        enunciado: "Qual imperador romano declarou o cristianismo como religião oficial do império?",
        alternativas: [
            {
    {
        enunciado: "A queda de qual muro marcou o fim da Guerra Fria?",
        alternativas: [
            {
            texto:"Muro da China",
            afirmacao:"Muro de Berlim"
            }
        ]
    },
    {
        enunciado: "Qual foi o principal motivo da Guerra do Vietnã?",
        alternativas: [
            {
            texto:"Disputa por territórios",
            afirmacao:"Luta contra a expansão do comunismo"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();