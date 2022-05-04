let opcao = prompt('Qual opção?');

function mostraMenu() {
    while (opcao <= 4) {
        switch (opcao) {
            case 1:
                console.log('um');
                break;

            case 2:
                console.log('dois');
                break;

            case 3:
                console.log('três');
                break;
        }

        opcao = prompt('Qual opção?');
    }
}

mostraMenu();