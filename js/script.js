let cont = 0
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");


function addTarefa() {
    // pegar o valor digitado no input
    valorInput = input.value;

    ++cont;

    // verificar se o input nao esta vazio, nulo ou indefinido
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        let novoItem = `<div id="${cont}" class="item">
        <div class="item-icone">
            <i class="iconoir-circle"></i>
        </div>

        <div class="item-nome">
            ${valorInput}
        </div>

        <div class="item-botao">
            <button onclick="deletar(${cont})" class="delete">
                Deletar
            </button>
        </div>
    </div>`;

        // adicionar novo item no main
        main.innerHTML += novoItem;

        // limpar o input
        input.value = "";
        input.focus();

    }
}

// funcao responsavel por apagar tarefa
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

// fazendo que a tecla ENTER possa adicionar uma tarefa
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})