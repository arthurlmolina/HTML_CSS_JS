document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const display = document.getElementById('resp');
    
    // Variáveis para armazenar valores e estado
    let primeiroNumero = null;
    let operador = null;
    let novoNumero = true;
    let resultado = null;
    
    // Função para atualizar o display
    function atualizarDisplay(valor) {
        display.textContent = valor;
    }
    
    // Inicializa o display
    atualizarDisplay('0');
    
    // Adiciona evento para todos os botões numéricos
    ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'].forEach(function(id, indice) {
        document.getElementById(id).addEventListener('click', function() {
            // Se estamos iniciando um novo número, limpa o display
            if (novoNumero) {
                atualizarDisplay('');
                novoNumero = false;
            }
            
            // Adiciona o dígito ao display
            atualizarDisplay(display.textContent + indice);
        });
    });
    
    // Adiciona evento para operadores
    ['adicao', 'sub', 'multi', 'divid'].forEach(function(id) {
        document.getElementById(id).addEventListener('click', function() {
            // Se temos um operador anterior, calcule o resultado antes
            if (operador && !novoNumero) {
                calcular();
            }
            
            // Armazena o primeiro número e o operador
            primeiroNumero = parseFloat(display.textContent);
            operador = this.textContent;
            novoNumero = true;
        });
    });
    
    // Adiciona evento para o botão igual
    document.getElementById('igual').addEventListener('click', function() {
        calcular();
    });
    
    // Função para calcular o resultado
    function calcular() {
        if (operador === null || novoNumero) {
            return;
        }
        
        const segundoNumero = parseFloat(display.textContent);
        
        switch (operador) {
            case '+':
                resultado = primeiroNumero + segundoNumero;
                break;
            case '-':
                resultado = primeiroNumero - segundoNumero;
                break;
            case '*':
                resultado = primeiroNumero * segundoNumero;
                break;
            case '/':
                resultado = primeiroNumero / segundoNumero;
                break;
        }
        
        // Exibe o resultado
        atualizarDisplay(resultado);
        
        // Armazena o resultado como primeiro número para a próxima operação
        primeiroNumero = resultado;
        operador = null;
        novoNumero = true;
    }
    
    // Adicionar botão para limpar a calculadora (opcional)
    // Você pode adicionar um botão no HTML para isso
    function limpar() {
        primeiroNumero = null;
        operador = null;
        novoNumero = true;
        resultado = null;
        atualizarDisplay('0');
    }
});