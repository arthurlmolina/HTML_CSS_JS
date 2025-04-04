let pessoas = [];

function add(){
    let nome = document.getElementById('nome');
    let idade = document.getElementById('idade');
    let pessoa = {
        nome: nome.value,
        idade: idade.value
    };
    pessoas.push(pessoa);
    nome.value = '';
    idade.value = '';
    console.log(pessoas);
}

