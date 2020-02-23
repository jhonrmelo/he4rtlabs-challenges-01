
let viewRegras = document.querySelector('.infoContent');
let viewCalc = document.querySelector('.valueContent');
let headerTitle = document.getElementById('headerTitle');
let inputTempo = document.getElementById('inputTempo');
let inputDiasEfetivos = document.getElementById('inputDiasEfetivos');
let inputFerias = document.getElementById('inputFerias');
let inputValor = document.getElementById('inputValor');
let spanValue = document.getElementById('spanValue');
let inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('input', ExecutaCalculo));

document.getElementById('btnViewCalc').addEventListener('click', () => {
    headerTitle.innerHTML = 'Calculadora';
    viewCalc.classList.remove('display-none');
    viewRegras.classList.add('display-none');
});

document.getElementById('btnViewRegras').addEventListener('click', () => {
    headerTitle.innerHTML = 'Regras';
    viewCalc.classList.add('display-none');
    viewRegras.classList.remove('display-none');
});



function ValidaInputs() {
    if (inputTempo.value === '' || inputFerias.value === '' || inputValor.value === '' || inputDiasEfetivos.value === '')
        return false;
    return true;
}

function ExecutaCalculo() {

    if (ValidaInputs()) {
        let Dias  = inputDiasEfetivos.value;
        let Tempo = inputTempo.value;
        let Valor = inputValor.value;
        let Ferias  = inputFerias.value;
        var ValorFinal = (Valor / (Dias * 4 * Tempo)) + ((Ferias * Dias * Tempo));
        console.log(ValorFinal);
        spanValue.innerHTML = `R$ ${ValorFinal.toFixed(2)}`
    }
    else {
        spanValue.innerHTML = `R$ 0`
    }
}

function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}

