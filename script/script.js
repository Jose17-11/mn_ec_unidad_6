let resultado;
function edad(param){
    if (param >= 18) {
        resultado = 'Eres mayor de edad';
    }else if(param >= 0){
        resultado = 'Eres menor de edad';
    }else{
        resultado = 'Ingresa una edad correctamente'
    }

}

function variable(){
    // Lee el valor ingresado en el input
    let ecuacion = parseInt(document.getElementById('input').value);
    edad(ecuacion);
    
    // Imprime la variable final en el DOM
    document.getElementById('resultado').textContent = resultado;
}


// switch (ecuacion) {
//     case "y'":
//         resultado = 'La funcion es cuadratica';
//         break;

//     default:
//         break;
// }



// const math = require('mathjs');

// // Define la ecuación diferencial
// const equation = math.parse('dy/dx = x^2 * y');

// // Separa las variables y realiza la integración
// const separatedEquation = math.integral(equation, math.parse('y'));
// console.log('Separada:', separatedEquation.toString());

// // Resuelve la ecuación resultante manualmente
// const constant = math.log(2);  // Constante de integración
// const solution = `y = exp(${constant}) * exp((1/3) * x^3)`;
// console.log('Solución:', solution);
