let stack = prompt("Qual stack você está atuando?");

let i = 0;

const frontFrameworks = ['VueJS', 'ReactJS', 'AngularJS'];
const backFrameworks = ['Backbone', 'ExpressJS', 'NodeJS'];

switch (stack) {
    case "Front End":
    case "front-end":
    case "front end":
    case "frontend": 
        document.write("<b><h1>Front-End Frameworks</h1></b>");
        for(i=0; i<frontFrameworks.length; i++){
            document.write(`Framework ${i+1}: ${frontFrameworks[i]}<br>`)
        }

        break;

    case "Back End":
    case "back-end":
    case "back end":
    case "backend":
        document.write("<b><h1>Back-End Frameworks</h1></b>");

        for(i=0; i<backFrameworks.length; i++){
            document.write(`Framework ${i+1}: ${backFrameworks[i]}<br>`)
        }

        break;
    
    default:
        document.write("<b><h1>Stack inválida</h1></b>")
}