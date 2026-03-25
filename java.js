// Função para atualizar informativo de culto
function atualizarInformativo() {
    const agora = new Date();
    const diaSemana = agora.getDay();

    function getSemanaDoMes(date) {
        const primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return Math.ceil((date.getDate() + primeiroDia) / 7);
    }

    const semana = getSemanaDoMes(agora);
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

    let alvo;
    let diaTexto = "";

    if (diaSemana === 0) { alvo = escala[0][semana-1]; diaTexto = "Hoje (Domingo)"; }
    else if (diaSemana === 3) { alvo = escala[3][semana-1]; diaTexto = "Hoje (Quarta-feira)"; }
    else if (diaSemana === 6) { alvo = escala[6][semana-1]; diaTexto = "Hoje (Sábado)"; }
    else {
        if (diaSemana < 3) { alvo = escala[3][semana-1]; diaTexto = "Quarta-feira"; }
        else if (diaSemana < 6) { alvo = escala[6][semana-1]; diaTexto = "Sábado"; }
        else { alvo = escala[0][semana]; diaTexto = "Domingo"; }
    }

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

    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});