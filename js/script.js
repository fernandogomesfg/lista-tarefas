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
        <div onclick="marcarTarefa(${cont})" class="item-icone">
            <i id="icone_${cont}" class="iconoir-circle"></i>
        </div>

        <div onclick="marcarTarefa(${cont})" class="item-nome">
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

// funcao responsavel por marcar a tarefa
function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    console.log(classe);

    if (classe == "item") {
        item.classList.add('clicado');

        var icone =  document.getElementById(`icone_`+id);
        icone.classList.remove("iconoir-circle");
        icone.classList.add("iconoir-check-circle");
    }else{
        item.classList.remove('clicado');

        var icone =  document.getElementById(`icone_`+id);
        icone.classList.add("iconoir-circle");
        icone.classList.remove("iconoir-check-circle");
    }
}

// fazendo que a tecla ENTER possa adicionar uma tarefa
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})