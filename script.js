// ===== FORMULÁRIO =====
const formulario = document.querySelector("form");

function validarFormulario(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const msg = document.querySelector("#msg").value;

  if (nome === "" || email === "" || msg === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    formulario.reset();
  }
}

formulario.addEventListener("submit", validarFormulario);


// ===== TEMA ESCURO =====
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btnTema.innerText = "☀️";
  } else {
    btnTema.innerText = "🌙";
  }
});


// ===== PROJETOS =====
const projetos = [
  {
    titulo: "Troca de Tela",
    descricao: "Substituição de telas quebradas de notebooks.",
    link: "#"
  },
  {
    titulo: "Upgrade de Memória",
    descricao: "Instalação e configuração de memória RAM.",
    link: "#"
  },
  {
    titulo: "Formatação Completa",
    descricao: "Reinstalação de sistema operacional e drivers.",
    link: "#"
  }
];

function renderizarProjetos() {
  const container = document.querySelector(".projetos-container");

  container.innerHTML = "";

  projetos.forEach(projeto => {
    const card = document.createElement("article");
    card.classList.add("card-projeto");

    card.innerHTML = `
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
    `;

    container.appendChild(card);
  });
}

// Executa quando carregar a página
renderizarProjetos();
