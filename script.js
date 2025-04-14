listaPessoas=[];

function add() {
    let nomePreenchido = document.getElementById('nome').value;
    let idadePreenchida = document.getElementById('idade').value;
    adicionarNoArray(nomePreenchido, idadePreenchida);
    apresentarArray();
}

function adicionarNoArray(nomePreenchido, idadePreenchida){
    listaPessoas.push(
    {
        "nome" : nomePreenchido,
        "idade" : idadePreenchida
    }
    )
}

function apresentarArray(){
    console.log("========================");
    listaPessoas.forEach(
        function(item, index){
        console.log(`Nome: ${item.nome}   Idade: ${item.idade}`);
    }
    )
    console.log("========================");
}

function verificar(){
    let nome = document.getElementById('searchName').value;
    let nomeEncontrado = false;
    listaPessoas.forEach(
        function(item, index){
            if (nome==item.nome){
                nomeEncontrado=true;
            }
        }
    )
    if (nomeEncontrado){
        alert("ACHEI!");
    } else{
        alert("NAO ACHEI!");
    }
}

function remover(){
    let nome = document.getElementById('searchName').value;
    
    let nomeEncontrado = false;
    listaPessoas.forEach(
        function(item, index){
            if (nome==item.nome){
                nomeEncontrado =true;
                listaPessoas.splice(index, 1);
            }
        }
    )
    if (nomeEncontrado==false){
        alert("este nome nao esta na lista")
    }
    apresentarArray();
}