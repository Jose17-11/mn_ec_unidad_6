

function variable(){
    // Lee el valor ingresado en el input
    let ecuacion = (document.getElementById('input').value);

    // Imprime la variable final en el DOM
    document.getElementById('resultado').textContent = ecuacion;
}

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
