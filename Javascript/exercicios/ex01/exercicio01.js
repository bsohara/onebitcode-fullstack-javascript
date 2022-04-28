alert("Bem-vindo! A seguir pediremos que informe alguns dados. Pode ser?")
var userName = prompt("Qual seu nome?");
var userAge = prompt("Qual a sua idade?");

var confirmAge = confirm(`A sua idade é ${userAge}?`);

alert(`Nome de usuário: ${userName}\nIdade do usuário: ${userAge}\nConfirmação da idade: ${confirmAge}`);


document.write(`Nome: <b>${userName}</b>
                <br>
                Idade: <b>${userAge}</b>
                <br>
                Confirmação de idade: <b>${confirmAge}</b>`);