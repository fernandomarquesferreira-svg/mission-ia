const perguntas = [
	"Você usaria uma ferramenta de inteligência artificial para ajudar a escrever um texto?",
	"Você acha importante conferir as informações que uma IA apresenta antes de compartilhá-las?",
	"Você acredita que a IA pode ajudar as pessoas a aprender coisas novas?",
	"Você gostaria de aprender a criar imagens ou ideias usando inteligência artificial?",
	"Você acha que as pessoas devem continuar tomando decisões importantes, mesmo com a ajuda da IA?",
];

const areaPergunta = document.querySelector("#question-area");
let perguntaAtual = 0;
let afirmacoes = 0;

function mostrarPergunta() {
	const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;

	areaPergunta.innerHTML = `
		<div class="question">
			<div class="question-meta">
				<span>Pergunta ${perguntaAtual + 1} de ${perguntas.length}</span>
				<span>Afirmações: ${afirmacoes}</span>
			</div>
			<div class="question-progress" aria-hidden="true">
				<span style="width: ${progresso}%"></span>
			</div>
			<h2>${perguntas[perguntaAtual]}</h2>
			<div class="answers">
				<button class="answer-button answer-yes" type="button" data-answer="sim">Sim</button>
				<button class="answer-button" type="button" data-answer="nao">Não</button>
			</div>
		</div>
	`;
}

function mostrarResultado() {
	areaPergunta.innerHTML = `
		<div class="result">
			<p class="result-number">${afirmacoes}/${perguntas.length}</p>
			<p class="result-label">${afirmacoes === 1 ? "afirmação" : "afirmações"}</p>
			<button class="restart-button" type="button">Responder novamente</button>
		</div>
	`;
}

areaPergunta.addEventListener("click", (event) => {
	const botao = event.target.closest("[data-answer], .restart-button");
	if (!botao) return;

	if (botao.classList.contains("restart-button")) {
		perguntaAtual = 0;
		afirmacoes = 0;
		mostrarPergunta();
		return;
	}

	if (botao.dataset.answer === "sim") afirmacoes += 1;
	perguntaAtual += 1;

	if (perguntaAtual < perguntas.length) {
		mostrarPergunta();
	} else {
		mostrarResultado();
	}
});

mostrarPergunta();
