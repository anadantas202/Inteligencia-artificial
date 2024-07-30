const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A farmácia é um estabelecimento fundamental na área da saúde, responsável pela dispensação de medicamentos e produtos relacionados à saúde.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: " Farmácia, uma disciplina que se desdobra em um vasto universo de conhecimento e prática. O que é realmente a Farmácia? É mais do que apenas o local onde se adquire medicamentos??",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Muito mais...",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Quais são os pilares fundamentais deste curso? Comecemos pela ciência. A Farmácia se baseia em sólidos princípios científicos, desde a química das substâncias medicinais até a biologia dos organismos aos quais elas se destinam. É através desses fundamentos que os futuros farmacêuticos compreendem como os medicamentos interagem com o corpo humano.",
        alternativas: [
            {
                texto: "Interessante...",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Quero compreender melhor sobre o assunto.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Mas o que significa ser um farmacêutico? Além de ser responsável pela distribuição de medicamentos, o farmacêutico é um guardião da saúde pública. Ele orienta pacientes sobre o uso correto dos medicamentos, monitora tratamentos e assegura que cada medicamento atenda aos mais altos padrões de qualidade e segurança.",
        alternativas: [
            {
                texto: "Legal...",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Como se dá a formação acadêmica nesse campo?",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "O curso de Farmácia tem uma estrutura de cinco anos, dividida entre teoria, prática em laboratórios e estágios supervisionados. Durante esse tempo, os estudantes não apenas aprendem a teoria por trás dos medicamentos, mas também ganham experiência prática em farmácias comunitárias, hospitais e indústrias farmacêuticas. ",
        alternativas: [
            {
                texto: "A Farmácia oferece diversas áreas de especialização, como Farmácia Hospitalar, Farmácia Clínica, Indústria Farmacêutica e Análises Clínicas. Cada uma dessas especialidades abre portas para diferentes carreiras dentro do campo farmacêutico.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
