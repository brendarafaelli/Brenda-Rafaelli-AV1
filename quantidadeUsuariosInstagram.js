import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuariosInstagram() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios-instagram.json'; // Dados específicos do Instagram
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasMetricas = Object.keys(dados);
    const quantidade = Object.values(dados);

    const data = [
        {
            x: nomeDasMetricas,
            y: quantidade,
            type: 'bar',
            marker: {
                color: getCSS('--secondary-color') // Usar a cor do Instagram
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Estatísticas do Instagram',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Métricas do Instagram',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Quantidade (milhões)',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadeUsuariosInstagram();
