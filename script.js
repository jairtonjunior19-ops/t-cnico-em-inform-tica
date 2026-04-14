const formulario = document.querySelector("#menu-formulario");

function validarFormulario(event) {
    event.preventDefault();



    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const msg = document.querySelector("#msg").value;

    if (nome === "" || email === "" || msg === "") {

        alert("Por favor, preencha todos os campos antes de enviar");

    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
    }
}
const btn = document.getElementById("btn-tema");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
const btnTema = document.querySelector(`#btn-tema`);
const body = document.body;

function alternarTema() {
    body.classList.toggle(`dark-theme`);

    if (body.classList.contains(`dark-theme`)) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";

    }

  }

btnTema.addEventListener(`click`, alternarTema);

const projetos = [
  { titulo: "Troca de Tela", descricao: "Substituição de telas quebradas de notebooks.", link: "https://github.com/seuusuario/troca-de-tela" },
  { titulo: "Upgrade de Memória", descricao: "Instalação e configuração de memória RAM.", link: "https://github.com/seuusuario/upgrade-memoria" },
  { titulo: "Formatação Completa", descricao: "Reinstalação de sistema operacional e drivers.", link: "https://github.com/seuusuario/formatacao-completa" }
];

function renderizarProjetos() {
  const container = document.getElementById("lista-projetos");
  container.innerHTML = "";

  projetos.forEach(projeto => {
    const cardHTML = `
      <article class="card-projeto">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}

// Renderiza automaticamente ao carregar a página
renderizarProjetos();

;

const btn = document.getElementById("btnProjetos");
const lista = document.getElementById("lista-projetos");

btn.addEventListener("click", () => {
  if (lista.style.display === "none") {
    lista.innerHTML = ""; // limpa antes de renderizar
    projetos.forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${p.titulo}</h3><p>${p.descricao}</p>`;
      lista.appendChild(div);
    });
    lista.style.display = "block";
    btn.textContent = "Esconder Projetos";
  } else {
    lista.style.display = "none";
    btn.textContent = "Mostrar Projetos";
  }
});
formulario.addEventListener(`submit` , validarFormulario);

function renderizarProjetos() {
  const container = document.querySelector(".projetos-container");

  container.innerHTML = "";

  meusProjetos.forEach(projeto => {
    const cardHTML = `
      <article class="card-projeto">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}
