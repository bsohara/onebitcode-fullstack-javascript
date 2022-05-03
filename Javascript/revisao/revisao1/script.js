var frontFrame = ['ReactJS', 'VueJS', 'NextJS'];
var backFrame = ['NodeJS', 'BackboneJS', 'Express'];
var mobiFrame = ['Ionic', 'React Native', 'Meteor'];
var deskFrame = ['Electron', 'Meteor Desk', 'NodeGUI'];

var option = parseInt(prompt(`Qual stack utilizar?
                            \n1 - frontend
                            \n2 - backend
                            \n3 - mobile
                            \n4 - desktop`));

switch (option) {
  case 1:
    for(let i=0; i<frontFrame.length; i++){
      document.write(`${frontFrame[i]} <br>`);
    }
    break;

  case 2:
    for(let i=0; i<backFrame.length; i++){
      document.write(`${backFrame[i]} <br>`);
    }
    break;

  case 3:
    for(let i=0; i<mobiFrame.length; i++){
      document.write(`${mobiFrame[i]} <br>`);
    }
    break;

  case 4:
    for(let i=0; i<deskFrame.length; i++){
      document.write(`${deskFrame[i]} <br>`);
    }
    break;

  default:
    document.write(`Framework inválido.`);
}

