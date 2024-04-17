// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber;
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let attempts = 1

// Eventos 
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyVerification)

// função callback
function handleTryClick (event) {
    const inputNumber = document.querySelector("#inputNumber")
    event.preventDefault()
    randomNumber = Math.round(Math.random() * 10)
    if (inputVerification(Number(inputNumber.value))) {
        // Se o número for válido, verifica se é igual ao número aleatório
        if (Number(inputNumber.value) == randomNumber) {
            toggleScreen();
            document.querySelector(".screen2 h2").innerText = `Acertou em ${attempts} tentativas!!!`;
        }
        attempts++;
    } else {
        // Se o número não for válido, exibe uma mensagem de erro
        alert("Digite um número válido entre 0 e 10.");
    } 
    inputNumber.value = "";
}

function handleResetClick() {
    toggleScreen()
    attempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keyVerification(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}

function inputVerification(number) {
    return number != "" && !isNaN(number) && number >= 0 && number <= 10;
}