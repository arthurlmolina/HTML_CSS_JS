function somar(){
    let primeiroCampo = document.getElementById('primeiroCampo');
    let segundoCampo = document.getElementById('segundoCampo');
    alert(parseFloat(primeiroCampo.value) + parseFloat(segundoCampo.value));
}

function subtrair(){
    let primeiroCampo = document.getElementById('primeiroCampo');
    let segundoCampo = document.getElementById('segundoCampo');
    alert(parseFloat(primeiroCampo.value) - parseFloat(segundoCampo.value)); 
}

function dividir(){
    let primeiroCampo = document.getElementById('primeiroCampo');
    let segundoCampo = document.getElementById('segundoCampo');
    alert(parseFloat(primeiroCampo.value) / parseFloat(segundoCampo.value));
}

function multiplicar(){
    let primeiroCampo = document.getElementById('primeiroCampo');
    let segundoCampo = document.getElementById('segundoCampo');
    alert(parseFloat(primeiroCampo.value) * parseFloat(segundoCampo.value));
}