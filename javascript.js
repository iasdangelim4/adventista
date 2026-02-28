<script>
function atualizarInformativo() {
    const agora = new Date();
    const diaSemana = agora.getDay(); 
    const diaDoMes = agora.getDate();

    // Função para descobrir em qual semana (1ª a 5ª) estamos
    function getSemanaDoMes(date) {
        const primeiroDiaDoMes = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        // A lógica da sua tabela considera a semana cheia ou a posição do dia
        return Math.ceil((date.getDate() + primeiroDiaDoMes) / 7);
    }

    const numSemana = getSemanaDoMes(agora);
    // Garante que o índice não ultrapasse 4 (referente à 5ª semana)
    const i = Math.min(numSemana - 1, 4); 

    const tituloAmarelo = document.getElementById('titulo-amarelo');
    const campoDepto = document.getElementById('departamento-texto');
    const campoResponsavel = document.getElementById('responsavel-nome');

    // Escala EXATA da sua imagem (image_551b20.jpg)
    const escala = {
        0: [ // DOMINGO
            { depto: "Escola Sabatina", resp: "Rogério e Monyk" },
            { depto: "Diaconato", resp: "João e Elineide" },
            { depto: "Tesouraria", resp: "Paulo e Paulo Pires" },
            { depto: "Desbravadores", resp: "Sabrina e Geovana" },
            { depto: "ASA", resp: "Lucia e Julia Pires" }
        ],
        3: [ // QUARTA
            { depto: "Min. da Mulher", resp: "Gelma e Gerdane" },
            { depto: "Ancião", resp: "Livio/Paulo/Jose/Almir" },
            { depto: "PGS", resp: "Almir e Claudia" },
            { depto: "Secretaria", resp: "Fernanda e Giordana" },
            { depto: "Min. da Criança", resp: "Gelma e Eva" }
        ],
        6: [ // SÁBADO
            { depto: "Min. Pessoal", resp: "Paulo Pires e Elineide" }, // Ajustado conforme foto
            { depto: "Min. Jovem", resp: "Eduarda e Geovana" },
            { depto: "Mordomia", resp: "Eva e Jose" },
            { depto: "Família", resp: "Livio e Gelma" },
            { depto: "Saúde", resp: "Claudia e Luane" }
        ]
    };

    let alvo;
    let prefixo = "";

    // Lógica de exibição baseada no dia atual
    if (diaSemana === 0) { 
        alvo = escala[0][i]; 
        prefixo = "Hoje (Domingo)"; 
    } else if (diaSemana === 3) { 
        alvo = escala[3][i]; 
        prefixo = "Hoje (Quarta-feira)"; 
    } else if (diaSemana === 6) { 
        alvo = escala[6][i]; 
        prefixo = "Hoje (Sábado)"; 
    } else {
        // Se não for dia de culto, mostra o próximo
        prefixo = "Próximo Culto";
        if (diaSemana < 3) { alvo = escala[3][i]; }
        else if (diaSemana < 6) { alvo = escala[6][i]; }
        else { alvo = escala[0][0]; } // Pula para o domingo da prox semana
    }

    if (alvo) {
        tituloAmarelo.innerText = "PRÓXIMO CULTO";
        campoDepto.innerText = prefixo + " - " + alvo.depto;
        campoResponsavel.innerText = alvo.resp;
    }
}

window.onload = atualizarInformativo;
</script>
