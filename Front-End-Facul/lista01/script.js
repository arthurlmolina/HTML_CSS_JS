alert("Olá, mundo!");

console.log("Meu primeiro script em JavaScript");

let var01 = 10;
let var02 = 7;
console.log(var01+var02);

let nome = prompt("Qual é o seu nome?");
alert("olá "+nome+" seja bem-vindo(a) ao nosso site!");

let num = '7';
num = parseInt(num);
console.log('Este numero era string, agora ele é inteiro: '+num)

let yesOrNot = true;
console.log('Esta variavel é booleana: '+ yesOrNot);

console.log('o tipo da variavel acima é: '+typeof(yesOrNot));

function somar(){
    let num1 = Number(document.getElementById('inum1').value);
    let num2 = Number(document.getElementById('inum2').value);
    alert("A soma é: " + (num1+num2));
}

let tmp = 0;
console.log('A variavel tmp no momento é: '+ tmp);
tmp = 10;
console.log('Após recebimento de um novo valor a tmp no momento é: '+ tmp);

function parOuImpar(){
    let numip = Number(document.getElementById('numip').value);
    if (numip%2===0){
        alert('O número '+numip+' é par!');
    } else{
        alert('O número '+numip+' é ímpar!');
    }
}

const constante = 37;
console.log('As constantes não podem ser alteradas! Uma vez definidas, esse será o seu valor')

let temporaria = 0;

temporaria = 10;

temporaria = 20;

let n1, n2, n3;

n1 = 10;
n2 = 20;
n3 = 30;
console.log(`A media entre n1, n2 e n3 é: ${(n1+n2+n3)/3}`)

function dobrar(){
    let num = Number(document.getElementById('num2v').value);
    alert(`O dobro de ${num} é: ${num*2}`);
}

function celsToFah(){
    let celsius = Number(document.getElementById('celToFah').value);
    alert(`${celsius}° graus celsius são ${(celsius * 1.8) + 32}° graus fahrenheit`);
}

function verIdade(){
    let idade = Number(document.getElementById('idade').value);
    if (idade >= 18){
        alert('Você é maior de idade!');
    }else{
        alert('Você é menor de idade!');
    }
}

function verMaior(){
    let maior;
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    if (n1 > n2 && n1 > n3){
        maior = n1;
    } else if (n2 > n1 && n2 > n3){
        maior = n2;
    } else if (n3 > n1 && n3 > n2){
        maior = n3;
    }

    alert(`O maior valor é: ${maior}`);
}

let cont;
for (cont=1; cont<11; cont++){
    console.log(`${cont} `);
}

cont=10;
while(cont>=1){
    console.log(`${cont} `);
    cont--;
}

let nump;

do {
    nump = prompt('Digite um numero maior que 10: ');
    if (nump<=10){
        alert(`Digite um número maior que 10`);
    }
} while (nump<=10);

for(cont=1; cont<11; cont++){
    console.log(`7 X ${cont} = ${7*cont}`);
}

cont=1;
let soma=0;
while(cont<=100){
    soma += cont;
    cont++;
}

console.log(`A soma dos números de 1 a 100 é: ${soma}`);

cont=1;
console.log('Numeros impares de 1 a 50 abaixo ');
while(cont<=50){
    if (cont%2!==0){
        console.log(`${cont} `);
    }
    cont++;
}

let array = [1, 21, 32, 47, 65, 46, 77, 78, 9, 10];
console.log('Os valores do array são: ');
for (cont=0; cont<10; cont++){
    console.log(`O valor da posição ${cont} é: ${array[cont]}`);
}

let nomes = ['Arthur', 'Gustavo', 'Carlos', 'João', 'Guilerme']
console.log(`Primeiro nome do vetor: ${nomes[0]}`);
console.log(`Último nome do vetor: ${nomes[4]}`);
nomes.push('Maria');
console.log(`Nomes do vetor atualizado abaixo:`)
for (cont=0; cont<5; cont++){
    console.log(`${nomes[cont]} `);
}

function somar2(n1,n2){
    alert(`A soma dos nímeros no parametro da função é ${n1+n2}`);
}

somar2(10,50);

function olaNome(nome){
    alert(`Olá ${nome}, seja bem-vindo(a)! (função com o nome de parâmetro)`);
}

olaNome('arthur');

let numeros = [5 , 4 , 3, 10, 7, 8, 120];

function mediaArray(numeros){
    let media=0;
    let tam = numeros.length;
    for(cont=0; cont<tam; cont++){
        media += numeros[cont];
    };
    media = media/tam;
    console.log(`A média dos números do array é: ${media.toFixed(2)}`);
}

mediaArray(numeros);

function alertar(){
    alert('Alerta disparado');
}

function addCont(){
    let p = document.getElementById('pText');
    p.innerHTML += '<br>Texto adicionado com sucesso!';
}

function changeColor(){
    let div = document.getElementById('divChange');
    div.style.backgroundColor = 'blue';
}

function showName(){
    iname = document.getElementById('iname').value;
    let p = document.getElementById('pName');
    p.innerHTML = `${iname}`;
}

function soma1(){
    let span = Number(document.getElementById('resSpan').innerText);
    span += 1;
    document.getElementById('resSpan').innerHTML=span;
}

function showNot(){
    let text = document.getElementById('textShow');
    if (text.style.display === 'none'){
        text.style.display = 'block';
    } else{
        text.style.display = 'none';
    }
}

function changeImg(){
    let img = document.getElementById('cruz');
    cruz.src = 'imagens/john3.16.jpeg';
}

function changeTheme(){
    let currentColor = getComputedStyle(document.body).backgroundColor;
    if (currentColor === 'rgb(144, 238, 144)'){
        document.body.style.backgroundColor = 'rgb(26, 33, 29)';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'lightgreen';
        document.body.style.color = 'black';
    }
}