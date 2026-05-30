// Função para atualizar informativo de culto
function atualizarInformativo() {
    const agora = new Date();
    const diaSemana = agora.getDay();

    let dataAlvo = new Date(agora);
    let diaTexto = "";
    let diaCultoSemana = diaSemana;

    if (diaSemana === 0) {
        diaTexto = "Hoje (Domingo)";
    } else if (diaSemana === 3) {
        diaTexto = "Hoje (Quarta-feira)";
    } else if (diaSemana === 6) {
        diaTexto = "Hoje (Sábado)";
    } else {
        let diff = 0;
        if (diaSemana === 1) { // Segunda
            diff = 2;
            diaTexto = "Quarta-feira";
            diaCultoSemana = 3;
        } else if (diaSemana === 2) { // Terça
            diff = 1;
            diaTexto = "Quarta-feira";
            diaCultoSemana = 3;
        } else if (diaSemana === 4) { // Quinta
            diff = 2;
            diaTexto = "Sábado";
            diaCultoSemana = 6;
        } else if (diaSemana === 5) { // Sexta
            diff = 1;
            diaTexto = "Sábado";
            diaCultoSemana = 6;
        }
        dataAlvo.setDate(agora.getDate() + diff);
    }

    // Calcula com precisão qual ocorrência do dia da semana é no mês (1ª a 5ª)
    const semanaAlvo = Math.ceil(dataAlvo.getDate() / 7);

    const tituloAmarelo = document.getElementById('titulo-amarelo');
    const campoDepto = document.getElementById('departamento-texto');
    const campoResponsavel = document.getElementById('responsavel-nome');

    const escala = {
        0: [
            { depto: "Escola Sabatina", resp: "Rogério e Monyk" },
            { depto: "Diaconato", resp: "João e Elineide" },
            { depto: "Tesouraria", resp: "Paulo e Paulo Pires" },
            { depto: "Desbravadores", resp: "Sabrina e Geovana" },
            { depto: "ASA", resp: "Lucia e Julia Pires" }
        ],
        3: [
            { depto: "Min. da Mulher", resp: "Gelma e Gerdane" },
            { depto: "Ancião", resp: "Livio/Paulo/Jose/Almir" },
            { depto: "PGS", resp: "Almir e Claudia" },
            { depto: "Secretaria", resp: "Fernanda e Giordana" },
            { depto: "Min. da Criança", resp: "Gelma e Eva" }
        ],
        6: [
            { depto: "Min. Pessoal", resp: "Paulo Pires e Sabrina" },
            { depto: "Min. Jovem", resp: "Eduarda e Geovana" },
            { depto: "Mordomia", resp: "Eva e Jose" },
            { depto: "Família", resp: "Livio e Gelma" },
            { depto: "Saúde", resp: "Claudia e Luane" }
        ]
    };

    const alvo = escala[diaCultoSemana][semanaAlvo - 1];

    tituloAmarelo.innerText = "Próximo Culto";
    campoDepto.innerText = diaTexto + " - " + (alvo ? alvo.depto : "Escala Geral");
    campoResponsavel.innerText = alvo ? alvo.resp : "";
}

// Função para toggle do menu hambúrguer
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Função para validação e envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Simulação de envio (substitua por backend real)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    atualizarInformativo();

    // Atualiza o ano do copyright automaticamente
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Fecha o menu ao clicar em qualquer link da navegação (melhora UX no mobile)
    if (navMenu) {
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});