let pessoas = [];

function add() {
    let nomePreenchido = document.getElementById('nome').value;
    let idadePreenchida = document.getElementById('idade').value;
    adicionarNoArray(nomePreenchido, idadePreenchida);
    apresentarArray();
    limparArray();
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

function limparArray() {
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
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
    limparArray()
}