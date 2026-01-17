const display = document.getElementById('display');  // On récupère l' écran de la calculatrice
const buttons = document.querySelectorAll("button");  // On récupère tous les boutons

let currentValue = '';   // Valeur actuellement affichée
let operator = '';
let firstValue = null;   // Valeur avant l'opérateur

// Gestion des clics sur les boutons
buttons.forEach(button => {
    // On ajoute un ecouteur d'eveneement sur chaque bouton
    button.addEventListener('click', () => {
        // On récupère la valeur du bouton cliqué
        const value = button.textContent;

        if(!isNaN(value)) {
            handleNumber(value);
        } else if (value === 'C') {
            clearCalculator();
        } else if (value === '=') {
            calculateResult();
        } else {
            handleOperator(value);
        }
    })
})

// Gérer les chiffres
function handleNumber(number) {
    currentValue += number;
    display.value = currentValue;
}

// Gérer les opérateurs
function handleOperator(op) {
    // On stocke la première valeur et on le convertit en nombre
    firstValue = Number(currentValue);
    operator = op;
    // On réinitialise la valeur actuelle pour saisir la deuxième valeur
    currentValue = '';
    // On vide l'affichage
    display.value = '';
}

// Calculer le résultat
function calculateResult() {
    if(firstValue === null || currentValue === '') return;

    // On convertit la  deuxieme valeur en nombre
    const secondValue = Number(currentValue);

    // Variable pour stocker le résultat
    let result;

    switch(operator) {
        case '+':
            result = firstValue + secondValue;
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '/':
            result = firstValue / secondValue;
            break;
        default:
            return;
    }

    display.value = result;
    currentValue = result.toString();
    firstValue = null;
    operator = '';
}

// Réinitialiser la calculatrice
function clearCalculator() {
    currentValue = '';
    firstValue = null;
    operator = '';
    display.value = '0';
}