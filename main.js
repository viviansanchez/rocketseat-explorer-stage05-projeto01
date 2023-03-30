const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// btnTry.addEventListener('click', handleTryClick)
btnTry.addEventListener('click', checkInputNumber)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener("keydown", handleResetKeydownEnter)

function checkInputNumber (event) {
  event.preventDefault()

  if (inputNumber.value >=0 && inputNumber.value <= 10 && inputNumber.value != "") {
    handleTryClick()
  } else if (inputNumber.value == "") {
    alert("Por favor, insira um número para poder jogar")
  } else {
    alert("Por favor, insira um número de 0 a 10")
  }
}

function handleTryClick () {
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
  }
  
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick () {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleResetKeydownEnter (e) {
  if (e.key === "Enter" && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

//desafios
//1) retirar função anonima do event listener
//2)criar limite para usuário só poder inserir números de 0 a 10
//3)validação se há número no input para poder contar como tentativa 


