let milliseconds = parseInt(prompt('Quantos milisegundos?'));

setTimeout(function() {
    milliseconds == 1000 ? console.log(`Essa mensagem é exibida após ${milliseconds/1000} segundo.`) : 
    milliseconds > 1000 ? console.log(`Essa mensagem é exibida após ${milliseconds/1000} segundos.`) : console.log('Não vai mostrar nada.');
}, milliseconds);