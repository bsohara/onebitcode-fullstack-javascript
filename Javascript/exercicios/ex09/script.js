let strSpd = 150;
let brk = 20;

function breakSpd(strSpd, printer){
    console.log(`Velocidade inicial: ${strSpd}km/s.`)
    for(let i=strSpd; i>=0; i-=brk){
        strSpd = strSpd - brk;

        if(strSpd <= 0){
            printer(strSpd);
        }
        else{
            console.log(`Nave desacelerando. Velocidade atual: ${strSpd}km/s`)
        }
    }
}

breakSpd(strSpd, () => {
    console.log('Nave parada! Portas abertas!');
})