const api = "http://localhost:8080/veiculos";

let editandoId = null;

let todosVeiculos = [];

// ===============================
// MOSTRAR MENSAGEM
// ===============================
function mostrarMensagem(texto, tipo) {

    const mensagem = document.getElementById("mensagem");

    mensagem.innerText = texto;

    mensagem.className = tipo;

    mensagem.style.display = "block";

    setTimeout(() => {

        mensagem.style.display = "none";

    }, 3000);
}

// ===============================
// LISTAR VEÍCULOS
// ===============================
async function listarVeiculos() {

    const resposta = await fetch(api);

    todosVeiculos = await resposta.json();

    atualizarDashboard(todosVeiculos);

    renderizarTabela(todosVeiculos);
}

// ===============================
// ATUALIZAR DASHBOARD
// ===============================
function atualizarDashboard(veiculos) {

    const total = veiculos.length;

    const disponiveis = veiculos.filter(
        v => v.status === "Disponível"
    ).length;

    const indisponiveis = veiculos.filter(
        v => v.status === "Indisponível"
    ).length;

    const valorTotal = veiculos.reduce(
        (total, veiculo) => total + veiculo.preco,
        0
    );

    document.getElementById("totalVeiculos")
        .innerText = total;

    document.getElementById("totalDisponiveis")
        .innerText = disponiveis;

    document.getElementById("totalIndisponiveis")
        .innerText = indisponiveis;

    document.getElementById("valorEstoque")
        .innerText =
        `R$ ${valorTotal.toLocaleString("pt-BR")}`;
}

// ===============================
// RENDERIZAR TABELA
// ===============================
function renderizarTabela(veiculos) {

    const tabela = document.getElementById("tabelaVeiculos");

    tabela.innerHTML = "";

    // CONTADOR
    document.getElementById("contadorVeiculos")
        .innerText =
        `Total de veículos: ${veiculos.length}`;

    // SE NÃO EXISTIR VEÍCULO
    if (veiculos.length === 0) {

        tabela.innerHTML = `

            <tr>

                <td colspan="9">
                    Nenhum veículo encontrado.
                </td>

            </tr>
        `;

        return;
    }

    // LISTAGEM
    veiculos.forEach(veiculo => {

        tabela.innerHTML += `

            <tr>

                <td>${veiculo.id}</td>

                <td>${veiculo.modelo}</td>

                <td>${veiculo.marca}</td>

                <td>${veiculo.ano}</td>

                <td>${veiculo.cor}</td>

                <td>
                    R$ ${Number(veiculo.preco)
                        .toLocaleString("pt-BR", {
                            minimumFractionDigits: 2
                        })}
                </td>

                <td>
                    ${Number(veiculo.quilometragem)
                        .toLocaleString("pt-BR")} KM
                </td>

                <td>

                    <span class="${
                        veiculo.status === "Disponível"
                            ? "status-disponivel"
                            : "status-indisponivel"
                    }">

                        ${veiculo.status}

                    </span>

                </td>

                <td>

                    <button onclick="editarVeiculo(${veiculo.id})">
                        Editar
                    </button>

                    <button class="deletar"
                        onclick="deletarVeiculo(${veiculo.id})">

                        Deletar

                    </button>

                </td>

            </tr>
        `;
    });
}

// ===============================
// FILTRAR VEÍCULOS
// ===============================
function filtrarVeiculos() {

    const texto = document.getElementById("pesquisa")
        .value
        .toLowerCase();

    const filtrados = todosVeiculos.filter(veiculo =>

        veiculo.modelo.toLowerCase().includes(texto)

        ||

        veiculo.marca.toLowerCase().includes(texto)

        ||

        veiculo.cor.toLowerCase().includes(texto)

        ||

        veiculo.status.toLowerCase().includes(texto)

        ||

        veiculo.ano.toString().includes(texto)

        ||

        veiculo.preco.toString().includes(texto)

        ||

        veiculo.quilometragem.toString().includes(texto)
    );

    renderizarTabela(filtrados);
}

// ===============================
// PEGAR DADOS FORMULÁRIO
// ===============================
function obterDadosFormulario() {

    return {

        modelo: document.getElementById("modelo").value,

        marca: document.getElementById("marca").value,

        ano: Number(document.getElementById("ano").value),

        cor: document.getElementById("cor").value,

        preco: Number(document.getElementById("preco").value),

        quilometragem: Number(
            document.getElementById("quilometragem").value
        ),

        status: document.getElementById("status").value
    };
}

// ===============================
// VALIDAR FORMULÁRIO
// ===============================
function validarFormulario(veiculo) {

    if (
        veiculo.modelo === "" ||
        veiculo.marca === "" ||
        veiculo.cor === "" ||
        veiculo.status === ""
    ) {

        mostrarMensagem(
            "Preencha todos os campos obrigatórios.",
            "erro"
        );

        return false;
    }

    if (veiculo.ano < 1900) {

        mostrarMensagem(
            "O ano informado é inválido.",
            "erro"
        );

        return false;
    }

    if (veiculo.preco < 0) {

        mostrarMensagem(
            "O preço não pode ser negativo.",
            "erro"
        );

        return false;
    }

    if (veiculo.quilometragem < 0) {

        mostrarMensagem(
            "A quilometragem não pode ser negativa.",
            "erro"
        );

        return false;
    }

    return true;
}

// ===============================
// CADASTRAR VEÍCULO
// ===============================
async function cadastrarVeiculo() {

    const veiculo = obterDadosFormulario();

    if (!validarFormulario(veiculo)) {

        return;
    }

    await fetch(api, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(veiculo)
    });

    limparFormulario();

    listarVeiculos();

    mostrarMensagem(
        "Veículo cadastrado com sucesso!",
        "sucesso"
    );
}

// ===============================
// EDITAR VEÍCULO
// ===============================
async function editarVeiculo(id) {

    const resposta = await fetch(`${api}/${id}`);

    const veiculo = await resposta.json();

    document.getElementById("modelo").value = veiculo.modelo;

    document.getElementById("marca").value = veiculo.marca;

    document.getElementById("ano").value = veiculo.ano;

    document.getElementById("cor").value = veiculo.cor;

    document.getElementById("preco").value = veiculo.preco;

    document.getElementById("quilometragem").value =
        veiculo.quilometragem;

    document.getElementById("status").value = veiculo.status;

    editandoId = id;

    document.getElementById("botaoAtualizar")
        .style.display = "block";

    mostrarMensagem(
        "Modo de edição ativado.",
        "sucesso"
    );
}

// ===============================
// ATUALIZAR VEÍCULO
// ===============================
async function atualizarVeiculo() {

    const veiculo = obterDadosFormulario();

    if (!validarFormulario(veiculo)) {

        return;
    }

    await fetch(`${api}/${editandoId}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(veiculo)
    });

    limparFormulario();

    document.getElementById("botaoAtualizar")
        .style.display = "none";

    editandoId = null;

    listarVeiculos();

    mostrarMensagem(
        "Veículo atualizado com sucesso!",
        "sucesso"
    );
}

// ===============================
// DELETAR VEÍCULO
// ===============================
async function deletarVeiculo(id) {

    const confirmar = confirm(
        "Deseja realmente deletar este veículo?"
    );

    if (!confirmar) {

        return;
    }

    await fetch(`${api}/${id}`, {

        method: "DELETE"
    });

    listarVeiculos();

    mostrarMensagem(
        "Veículo deletado com sucesso!",
        "sucesso"
    );
}

// ===============================
// LIMPAR FORMULÁRIO
// ===============================
function limparFormulario() {

    document.getElementById("modelo").value = "";

    document.getElementById("marca").value = "";

    document.getElementById("ano").value = "";

    document.getElementById("cor").value = "";

    document.getElementById("preco").value = "";

    document.getElementById("quilometragem").value = "";

    document.getElementById("status").value = "";

    editandoId = null;

    document.getElementById("botaoAtualizar")
        .style.display = "none";
}

// ===============================
// INICIAR SISTEMA
// ===============================
listarVeiculos();