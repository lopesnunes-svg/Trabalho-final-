
document.addEventListener("DOMContentLoaded", function () {

    const estilo = document.createElement("style");

    estilo.textContent = `
        .botao-tema {
            background: white;
            color: #be3d3d;
            border: 2px solid #be3d3d;
            border-radius: 8px;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 15px;
            font-weight: bold;
        }

        body.modo-escuro {
            background-color: #171923 !important;
            color: #eeeeee !important;
        }

        body.modo-escuro header {
            background-color: #252936 !important;
            color: white !important;
        }

        body.modo-escuro nav ul li ul {
            background-color: #252936 !important;
        }

        body.modo-escuro #inicio,
        body.modo-escuro #sobre,
        body.modo-escuro #quiz,
        body.modo-escuro footer {
            background-color: #202534 !important;
            color: white !important;
        }

        body.modo-escuro #temas article {
            background-color: #292e3d !important;
            color: white !important;
        }

        body.modo-escuro #temas article h1,
        body.modo-escuro #temas article p {
            color: #f1f1f1 !important;
        }

        body.modo-escuro #polimeros,
        body.modo-escuro #lipidios,
        body.modo-escuro #carboidratos,
        body.modo-escuro #proteinas,
        body.modo-escuro #acidosnucleicos {
            background-color: #292e3d !important;
            color: white !important;
        }

        body.modo-escuro #polimeros h2,
        body.modo-escuro #lipidios h2,
        body.modo-escuro #carboidratos h2,
        body.modo-escuro #proteinas h2,
        body.modo-escuro #acidosnucleicos h2,
        body.modo-escuro #polimeros p,
        body.modo-escuro #lipidios p,
        body.modo-escuro #carboidratos p,
        body.modo-escuro #proteinas p,
        body.modo-escuro #acidosnucleicos p {
            color: white !important;
        }

        body.modo-escuro #quiz fieldset,
        body.modo-escuro #resultado {
            background-color: #292e3d !important;
            color: white !important;
        }

        body.modo-escuro #quiz fieldset label {
            background-color: #383f50 !important;
            color: white !important;
        }

        body.modo-escuro #resultado #mensagem {
            color: white !important;
        }

        body.modo-escuro .controles-temas,
        body.modo-escuro .carrossel {
            background-color: #202534;
            color: white;
        }

        body.modo-escuro .campo-busca,
        body.modo-escuro .filtro-categoria {
            background-color: #292e3d;
            color: white;
            border-color: #777;
        }

        body.modo-escuro .item-carrossel {
            background-color: #292e3d;
            color: white;
        }

        .controles-temas {
            width: 100%;
            padding: 25px 20px 0;
            text-align: center;
          
        }

        .campo-busca {
            width: 100%;
            max-width: 500px;
            padding: 13px;
            border: 1px solid #aaa;
            border-radius: 8px;
            font-size: 16px;
            margin-bottom: 15px;
        }

        .filtros {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin: 10px 0 20px;
        }

        .filtro-categoria,
        .botao-expandir,
        .botao-carrossel {
            padding: 10px 16px;
            border: none;
            border-radius: 8px;
            background-color: #be3d3d;
            color: white;
            cursor: pointer;
            font-size: 15px;
        }

        .filtro-categoria:hover,
        .botao-expandir:hover,
        .botao-carrossel:hover {
            background-color: #962828;
        }

        .filtro-categoria.ativo {
            background-color: rgb(255, 0, 0);
            outline: 2px solid #be3d3d;
            outline-offset: 2px;
        }

        .mensagem-busca {
            color: inherit;
            margin: 10px 0;
        }

        .carrossel {
            padding: 40px 20px;
            text-align: center;
            background-color: #eef5ff;
        }

        .carrossel h2 {
            margin-bottom: 20px;
        }

        .item-carrossel {
            display: none;
            max-width: 650px;
            min-height: 150px;
            margin: 0 auto 20px;
            padding: 30px;
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 4px 12px #ffffff;
        }

        .item-carrossel.ativo {
            display: block;
            animation: aparecer 0.4s ease;
        }

        .item-carrossel h3 {
            color: #be3d3d;
            margin-bottom: 12px;
        }

        body.modo-escuro .item-carrossel h3 {
            color: #ff9999;
        }

        .controles-carrossel {
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
        }

        @keyframes aparecer {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .botao-tema {
                margin: 5px;
            }

            .campo-busca {
                max-width: 100%;
            }
        }
    `;

    document.head.appendChild(estilo);

    const botaoTema = document.createElement("button");

    botaoTema.className = "botao-tema";
    botaoTema.type = "button";

    const cabecalho = document.querySelector("header");

    if (cabecalho) {
        cabecalho.appendChild(botaoTema);
    } else {
        botaoTema.style.position = "fixed";
        botaoTema.style.top = "15px";
        botaoTema.style.right = "15px";
        botaoTema.style.zIndex = "2000";
        document.body.appendChild(botaoTema);
    }

    function aplicarTema(tema) {
        const escuro = tema === "escuro";

        document.body.classList.toggle("modo-escuro", escuro);

        botaoTema.textContent = escuro
            ? "☀️ Modo claro"
            : "🌙 Modo escuro";

        botaoTema.setAttribute("aria-pressed", String(escuro));
    }

    const temaSalvo = localStorage.getItem("temaMacromoleculas");

    aplicarTema(temaSalvo || "claro");

    botaoTema.addEventListener("click", function () {
        const temaAtual = document.body.classList.contains("modo-escuro")
            ? "escuro"
            : "claro";

        const novoTema = temaAtual === "escuro" ? "claro" : "escuro";

        localStorage.setItem("temaMacromoleculas", novoTema);

        aplicarTema(novoTema);
    });


    const idsConteudo = [
        "polimeros",
        "lipidios",
        "carboidratos",
        "proteinas",
        "acidosnucleicos"
    ];

    idsConteudo.forEach(function (id) {
        const conteudo = document.getElementById(id);

        if (!conteudo) {
            return;
        }

        const secoes = Array.from(conteudo.children).filter(function (elemento) {
            return elemento.tagName === "SECTION";
        });

        if (secoes.length < 2) {
            return;
        }

        secoes.forEach(function (secao, indice) {
            if (indice > 0) {
                secao.hidden = true;
            }
        });

        const botaoExpandir = document.createElement("button");

        botaoExpandir.type = "button";
        botaoExpandir.className = "botao-expandir";
        botaoExpandir.textContent = "Ver mais";

        secoes[0].after(botaoExpandir);

        botaoExpandir.addEventListener("click", function () {
            const estaRecolhido = secoes[1].hidden;

            secoes.forEach(function (secao, indice) {
                if (indice > 0) {
                    secao.hidden = !estaRecolhido;
                }
            });

            botaoExpandir.textContent = estaRecolhido
                ? "Ver menos"
                : "Ver mais";

            if (!estaRecolhido) {
                secoes[0].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    const secaoTemas = document.getElementById("temas");

    if (secaoTemas) {
        const cartoes = Array.from(secaoTemas.querySelectorAll("article"));

        const categorias = {
            carboidratos: ["alimentacao", "saude"],
            lipidios: ["alimentacao", "saude"],
            acidosnucleicos: ["saude", "tecnologia"],
            polimeros: ["tecnologia", "meio ambiente"],
            proteinas: ["alimentacao", "saude"]
        };

        cartoes.forEach(function (cartao) {
            const classe = Array.from(cartao.classList).find(function (nome) {
                return categorias[nome];
            });

            cartao.dataset.categorias = classe
                ? categorias[classe].join(" ")
                : "";
        });

        const controles = document.createElement("div");

        controles.className = "controles-temas";

        controles.innerHTML = `
            <h2>Encontre um tema</h2>
            

            <input
                type="search"
                class="campo-busca"
                placeholder="Pesquisar macromoléculas..."
                aria-label="Pesquisar temas"
                
            >

            <div class="filtros">
                <button class="filtro-categoria ativo" data-categoria="todos">Todos</button>
                <button class="filtro-categoria" data-categoria="alimentacao">Alimentação</button>
                <button class="filtro-categoria" data-categoria="saude">Saúde</button>
                <button class="filtro-categoria" data-categoria="tecnologia">Tecnologia</button>
                <button class="filtro-categoria" data-categoria="meio ambiente">Meio ambiente</button>
            </div>

            <p class="mensagem-busca" aria-live="polite"></p>
        `;

        secaoTemas.before(controles);

        const campoBusca = controles.querySelector(".campo-busca");
        const botoesFiltro = controles.querySelectorAll(".filtro-categoria");
        const mensagemBusca = controles.querySelector(".mensagem-busca");

        let categoriaAtual = "todos";

        function normalizar(texto) {
            return texto
                .toLocaleLowerCase("pt-BR")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
        }

        function atualizarCartoes() {
            const termo = normalizar(campoBusca.value.trim());
            let quantidade = 0;

            cartoes.forEach(function (cartao) {
                const textoCartao = normalizar(cartao.textContent);
                const categoriasCartao = normalizar(
                    cartao.dataset.categorias
                );

                const correspondeBusca = textoCartao.includes(termo);
                const correspondeCategoria =
                    categoriaAtual === "todos" ||
                    categoriasCartao.split(" ").includes(
                        normalizar(categoriaAtual)
                    );

                const mostrar = correspondeBusca && correspondeCategoria;

                cartao.hidden = !mostrar;

                if (mostrar) {
                    quantidade++;
                }
            });

            mensagemBusca.textContent = quantidade === 0
                ? "Nenhum resultado encontrado. Tente outra palavra ou categoria."
                : quantidade + (quantidade === 1
                    ? " tema encontrado."
                    : " temas encontrados.");
        }

        campoBusca.addEventListener("input", atualizarCartoes);

        botoesFiltro.forEach(function (botao) {
            botao.addEventListener("click", function () {
                categoriaAtual = botao.dataset.categoria;

                botoesFiltro.forEach(function (outroBotao) {
                    outroBotao.classList.toggle(
                        "ativo",
                        outroBotao === botao
                    );
                });

                atualizarCartoes();
            });
        });

        atualizarCartoes();
    }

});



const respostasCorretas = {
    q1: "b",
    q2: "c",
    q3: "c",
    q4: "a",
    q5: "a",
    q6: "c",
    q7: "a",
    q8: "a",
    q9: "b",
    q10: "c",
    q11: "a",
    q12: "b",
    q13: "c",
    q14: "a",
    q15: "d"
};

const explicacoes = {
    q1: "Confira o conceito apresentado na questão.",
    q2: "Revise as características da macromolécula abordada.",
    q3: "Lembre-se da estrutura e da função dessa molécula.",
    q4: "Revise a composição química do composto.",
    q5: "Considere a função biológica da macromolécula.",
    q6: "Observe a relação entre estrutura e função.",
    q7: "Revise os componentes dessa molécula.",
    q8: "Considere as características químicas apresentadas.",
    q9: "Revise a função dessa substância nos seres vivos.",
    q10: "Observe quais elementos formam essa macromolécula.",
    q11: "Considere a importância biológica do composto.",
    q12: "Revise as propriedades da molécula apresentada.",
    q13: "Lembre-se de como essa macromolécula é formada.",
    q14: "Revise as funções desse grupo de moléculas.",
    q15: "Confira o conceito científico relacionado à questão."
};

const formulario = document.getElementById("quiz");
const resultado = document.getElementById("resultado");
const pontuacao = document.getElementById("pontuacao");
const mensagem = document.getElementById("mensagem");
const feedback = document.getElementById("feedback");
const botaoReiniciar = document.getElementById("reiniciar");

if (formulario && resultado && pontuacao && mensagem && feedback) {

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let acertos = 0;
        let respondidas = 0;

        feedback.innerHTML = "";

        for (let i = 1; i <= 15; i++) {
            const questao = "q" + i;
            const selecionada = formulario.querySelector(
                'input[name="' + questao + '"]:checked'
            );

            const bloco = formulario.querySelector(
                'input[name="' + questao + '"]'
            )?.closest("fieldset");

            const itemFeedback = document.createElement("p");

            if (selecionada) {
                respondidas++;

                if (selecionada.value === respostasCorretas[questao]) {
                    acertos++;
                    itemFeedback.textContent =
                        "Questão " + i + ": resposta correta!";
                    itemFeedback.className = "resposta-correta";
                } else {
                    itemFeedback.textContent =
                        "Questão " + i +
                        ": resposta incorreta. " +
                        explicacoes[questao];
                    itemFeedback.className = "resposta-incorreta";
                }
            } else {
                itemFeedback.textContent =
                    "Questão " + i + ": não respondida. " +
                    "Revise o conteúdo e tente novamente.";
                itemFeedback.className = "resposta-incorreta";
            }

            feedback.appendChild(itemFeedback);

            if (bloco) {
                bloco.querySelectorAll('input[type="radio"]').forEach(function(input) {
                    input.disabled = true;
                });
            }
        }

        const porcentagem = Math.round((acertos / 15) * 100);

        pontuacao.textContent =
            "Você acertou " + acertos + " de 15 questões (" +
            porcentagem + "%).";

        if (acertos === 15) {
            mensagem.textContent = "Parabéns! Você acertou todas as questões!";
        } else if (acertos >= 11) {
            mensagem.textContent = "Muito bem! Você demonstrou um ótimo conhecimento.";
        } else if (acertos >= 8) {
            mensagem.textContent = "Bom trabalho! Continue revisando os conteúdos.";
        } else {
            mensagem.textContent = "Continue estudando! Revisar os temas vai ajudar você.";
        }

        resultado.hidden = false;

        const botaoFinalizar = formulario.querySelector('button[type="submit"]');

        if (botaoFinalizar) {
            botaoFinalizar.disabled = true;
        }

        resultado.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    if (botaoReiniciar) {
        botaoReiniciar.addEventListener("click", function() {
            formulario.reset();

            formulario.querySelectorAll('input[type="radio"]').forEach(function(input) {
                input.disabled = false;
            });

            const botaoFinalizar = formulario.querySelector('button[type="submit"]');

            if (botaoFinalizar) {
                botaoFinalizar.disabled = false;
            }

            feedback.innerHTML = "";
            pontuacao.textContent = "";
            mensagem.textContent = "";
            resultado.hidden = true;

            formulario.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
}
