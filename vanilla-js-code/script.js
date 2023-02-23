// 1er paso: seleccionar los elementos del DOM y guardarlos en variables
const scoreField = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')
const bodyField = document.querySelector('body')

// 2do paso: crear las variables que necesitamos

let score
let highscore = 0

// obtener un número aleatorio entre 1 y 20
const MIN_NUMBER = 1
const MAX_NUMBER = 20
let secretNumber

fnInitApp()

// 3er paso: añadir un listener al checkButton y mostrar
// un mensaje que diga si el número es mayor o menor  en el campo messageField
// ...

checkButton.addEventListener('click', fnCheckButton)

function mostrarMensaje(mensaje) {
  messageField.textContent = mensaje
}

function fnCheckButton() {
  // aunque guesssField  sea un input de tipo number, su valor es un string
  const number = Number(guessField.value)

  if (number === secretNumber) {
    mostrarMensaje('¡Ganaste!')
    if (score > highscore) highscore = highscoreField.textContent = score
    // cambiar el color del fondo del body o lo que sea, mostrar el número secreto en vez de ?
    bodyField.style.backgroundColor = '#60b347'
    numberField.textContent = secretNumber
  } else if (score === 1) {
    mostrarMensaje('¡Perdiste!')
    scoreField.textContent = 0
    bodyField.style.backgroundColor = '#b34747'
  } else {
    const mensaje =
      number > secretNumber ? 'El número es mayor' : 'El número es menor'
    mostrarMensaje(mensaje)
    score--
    scoreField.textContent = score
  }
}

// 4to paso: añadir un listener al againButton y resetear el juego

againButton.addEventListener('click', fnInitApp)

function fnInitApp() {
  score = 20
  scoreField.textContent = score
  guessField.value = ''
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
  console.log(`El número secreto es ${secretNumber}`)
  mostrarMensaje('Empieza a adivinar...')
  bodyField.style.backgroundColor = '#222'
  numberField.textContent = '?'
}
