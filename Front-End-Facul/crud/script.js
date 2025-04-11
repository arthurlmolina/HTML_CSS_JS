let pessoas = [];

function add() {
    let nomePreenchido = document.getElementById('nome').value;
    let idadePreenchida = document.getElementById('idade').value;
    adicionarNoArray(nomePreenchido, idadePreenchida);
    apresentarArray();
    limparCampo('nome');
    limparCampo('idade');
}

function adicionarNoArray(nome, idade) {
    pessoas.push(
        {
            'nome': nome, 'idade': idade
        }
    );
}

function apresentarArray() {
    console.log("------------ Lista de Pessoas ------------");

    pessoas.forEach(function (item) {
        console.log(`Nome: ${item.nome}  -  Idade: ${item.idade}`);
    });

    console.log("------------------------------------------");
}

function limparCampo(id) {
    document.getElementById(id).value = '';

}

function verificar() {
    let nomePreenchido = document.getElementById('searchName').value;
    let nomeEncontrado = false;
    pessoas.forEach(function (item, index) {
        if (nomePreenchido == item.nome) {
            nomeEncontrado = true;
        }
    });

    if (nomeEncontrado) {
        alert("Este nome está na lista");
    } else {
        alert("Este nome não esta na lista");
    }
}

function remover() {
    let nomePreenchido = document.getElementById('searchName').value;
    nomeEncontrado = false;
    pessoas.forEach(function(item,index){
        if (nomePreenchido == item.nome){
            pessoas.splice(index, 1);
            nomeEncontrado = true;
        }

    });

    if (nomeEncontrado){
        alert("Nome excluído com sucesso!");
        apresentarArray();
    } else{
        alert("Não foi possível encontrar este nome na lista");
    }
    limparCampo('searchName');
};
