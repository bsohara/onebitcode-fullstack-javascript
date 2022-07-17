let salario = 1996.00;

const aumentoSalarial = (valor, porcentagem) => {
    return valor + (valor * porcentagem);
}

const verificaSalario = (valor) => {
    let reajusteSalarial = 0;
    valor <= 280 ? reajusteSalarial = aumentoSalarial(valor, 0.2) : 
    valor > 280 && valor < 700 ? reajusteSalarial = aumentoSalarial(valor, 0.15) : 
    valor >= 700 && valor < 1500 ? reajusteSalarial = aumentoSalarial(valor, 0.1) : 
    valor >= 1500 ? reajusteSalarial = aumentoSalarial(valor, 0.05) : console.log("Isto é só.");
    return reajusteSalarial;
}

let novoSalario = verificaSalario(salario);
console.log(`Reajuste salarial: R$ ${novoSalario}`);

