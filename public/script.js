// dados fictícios para iniciar na tela

let equipamentos = [
    {
        id: 1, 
        quantidade: 2,
        nome: "Notebook Dell Inspiron",
        categoria:"computador",
        status:"disponivel"
    },

    {
        id:2,
        quantidade:5,
        nome:"Mouse sem Fio Logitech",
        categoria:"periferico",
        status:"em_uso"
    },

    {
        id:3,
        quantidade: 5,
        nome: "Monitor LG 24",
        categoria:"computador",
        status:"em_manutencao"

    }
];

let editandoId = null; //guarda o id quando é editado um item 

const CATEGORIAS = {computador:"Computador", periferico:"Periférico", rede:"Rede"};
const STATUS = { disponivel:"Disponível", em_uso: "Em Uso", em_manutencao : "Em manutenção"};



const corpoTabela = document.getElementById('corpo-tabela');    
const totalItens = document.getElementById('total-itens');
const mensagemVazia = document.getElementById('mensagem-vazia');
const formulario = document.getElementById('formulario'); 
const filtroStatus = document.getElementById('filtro-status');      // filtro inicial no formulario para saber os status
const filtroCategoria = document.getElementById('filtro-categoria');// filtro inicial no formulario para saber a categoria do item(disponivel, em uso, em manutenção)


//==============    renderização na tela =====================================================

function aplicarFiltros(lista){
    const status = filtroStatus.value;  //pega o valor dentro do campo do filtro de status
    const categoria = filtroCategoria.value; //pega o valor dentro do campo do filtro de categoria

    return lista.filter(item =>{
        const passaStatus = status ? item.status === status: true;  // se tiver um item em status ele é retornado se não a condição passa a ser true quando o usuário não digitar nada para não ficar vazio, mesma coisa vale para o item a baixo.
        const passaCategoria = categoria ? item.categoria === categoria: true;
        return passaStatus && passaCategoria;
    });
}


function renderizarTabela(){
    const lista = aplicarFiltros(equipamentos); // chama  a função aplicar filtros
    corpoTabela.innerHTML = "";
    if (lista.length === 0){
        mensagemVazia.style.display = "block";
    }else{
        mensagemVazia.style.display = "none";
    }
    lista.forEach(item =>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td data-label="Nome">${item.nome}</td>
            <td data-label="Categoria">${CATEGORIAS[item.categoria]}</td>
            <td data-label="Quantidade">${item.quantidade}</td>
            <td data-label="Status">
                <span class="badge badge-${item.status}">${STATUS[item.status]}</span>
            </td>
        <td data-label="Ações">
            <div class="acoes">
                <button class="btn-icone btn-editar" data-id="${item.id}" title="Editar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                    </svg>
                    
                </button>
                <button class="btn-icone btn-excluir" data-id="${item.id}" title="Excluir">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg>
                    
                </button>
            </div>
        </td>
        
        `;

        corpoTabela.appendChild(tr); // insere uma nova linha na tabela
    });
    totalItens.textContent = `${equipamentos.length} ${equipamentos.length === 1 ? "item" : "itens"} cadastrados`;

}


function mostrarToast(mensagem, tipo = "sucesso"){
    const toast = document.getElementById("toast");
    toast.textContent = mensagem;
    toast.className = `toast ${tipo}`;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}


// mostra na tela
renderizarTabela();





// ======== SUBMIT DO FORMULÁRIO (criar ou editar) ========

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const quantidade = document.getElementById("quantidade").value;
    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value;
    const status = document.getElementById("status").value;

    if (!quantidade || !nome || !categoria || !status) {
        mostrarToast("Preencha todos os campos obrigatórios.", "erro");
        return;
    }

    if (editandoId) {
        // Atualizando um item existente
        equipamentos = equipamentos.map(item =>
            item.id === editandoId
                ? { ...item, quantidade: Number(quantidade), nome, categoria, status }
                : item
        );
        mostrarToast("Equipamento atualizado com sucesso!");
        editandoId = null;
        document.getElementById("adicionar").textContent = "Adicionar";
    } else {
        // Criando um novo item
        const novoItem = {
            id: Date.now(), // provisório, no backend real o id vem do banco
            quantidade: Number(quantidade),
            nome,
            categoria,
            status,
        };
        equipamentos.push(novoItem);
        mostrarToast("Equipamento adicionado com sucesso!");
    }

    formulario.reset();
    renderizarTabela();
});


// ======== EDITAR / EXCLUIR (delegação de evento) ========

corpoTabela.addEventListener("click", function (e) {
    const botao = e.target.closest("button");
    if (!botao) return;

    const id = Number(botao.dataset.id);
    if (!id) return;

    if (botao.classList.contains("btn-excluir")) {
        const confirmar = confirm("Tem certeza que deseja excluir este equipamento?");
        if (confirmar) {
            equipamentos = equipamentos.filter(item => item.id !== id);
            mostrarToast("Equipamento excluído.", "erro");
            renderizarTabela();
        }
    }

    if (botao.classList.contains("btn-editar")) {
        const item = equipamentos.find(item => item.id === id);
        document.getElementById("quantidade").value = item.quantidade;
        document.getElementById("nome").value = item.nome;
        document.getElementById("categoria").value = item.categoria;
        document.getElementById("status").value = item.status;

        editandoId = id;
        document.getElementById("adicionar").textContent = "Salvar edição";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});


// ======== FILTROS ========

filtroStatus.addEventListener("change", renderizarTabela);
filtroCategoria.addEventListener("change", renderizarTabela);

document.getElementById("limpar-filtros").addEventListener("click", () => {
    filtroStatus.value = "";
    filtroCategoria.value = "";
    renderizarTabela();
});