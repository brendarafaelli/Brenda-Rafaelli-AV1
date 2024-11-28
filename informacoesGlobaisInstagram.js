const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais-instagram.json'; // Dados específicos do Instagram

async function vizualizarInformacoesGlobaisInstagram() {
    const res = await fetch(url);
    const dados = await res.json();
    const usuariosAtivos = (dados.usuarios_ativos / 1e9).toFixed(2);
    const totalPessoasNoMundo = (dados.total_pessoas_mundo / 1e9).toFixed(2);
    const horas = Math.floor(dados.tempo_medio);
    const minutos = Math.round((dados.tempo_medio % 1) * 60); 
    const porcentagemUsuariosAtivos = ((usuariosAtivos / totalPessoasNoMundo) * 100).toFixed(2);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${totalPessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${usuariosAtivos} bilhões</span> estão conectadas ao Instagram, passando em média <span>${horas} horas</span> e <span>${minutos} minutos</span> por dia na plataforma? Isso representa aproximadamente <span>${porcentagemUsuariosAtivos}%</span> da população mundial.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobaisInstagram();
