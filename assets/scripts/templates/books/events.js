const getFormFields = require('../../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../../store.js')

// IsWinFunction checks the game is over and record the winner player token
const IsWinFunction = function () {
  if (store.cells[0] !== '' &&
        store.cells[0] === store.cells[1] &&
        store.cells[1] === store.cells[2]) {
    store.winner = document.getElementById('res1').innerHTML
    return true
  }
  if (store.cells[3] !== '' && store.cells[3] === store.cells[4] && store.cells[4] === store.cells[5]) {
    store.winner = document.getElementById('res4').innerHTML
    return true
  } else if (store.cells[6] !== '' && store.cells[6] === store.cells[7] && store.cells[7] === store.cells[8]) {
    store.winner = document.getElementById('res7').innerHTML
    return true
  } else if (store.cells[0] !== '' && store.cells[0] === store.cells[3] && store.cells[3] === store.cells[6]) {
    store.winner = document.getElementById('res1').innerHTML
    return true
  } else if (store.cells[1] !== '' && store.cells[1] === store.cells[4] && store.cells[4] === store.cells[7]) {
    store.winner = document.getElementById('res2').innerHTML
    return true
  } else if (store.cells[2] !== '' && store.cells[2] === store.cells[5] && store.cells[5] === store.cells[8]) {
    store.winner = document.getElementById('res3').innerHTML
    return true
  } else if (store.cells[0] !== '' && store.cells[0] === store.cells[4] && store.cells[4] === store.cells[8]) {
    store.winner = document.getElementById('res1').innerHTML
    return true
  } else if (store.cells[2] !== '' && store.cells[2] === store.cells[4] && store.cells[4] === store.cells[6]) {
    store.winner = document.getElementById('res3').innerHTML
    return true
  }
  return false
}

// IsTieFunction checks the game is a tie/draw
const IsTieFunction = function (event) {
  return store.cells.every(checkValAllInArray)
}

function checkValAllInArray (arrayVal) {
  return arrayVal !== ''
}

// clicked function is actively waiting for user to click on the tiles of the createBoard
// game and remove listener event when game is over
const clicked = function (event) {
  event.preventDefault()

  // console.log('it is clicked. id is ' + this.id)
  // $('#res1').html('')
  let token = 'X'
  if (store.flag === true) {
    token = 'X'
  } else if (store.flag === false) {
    token = '0'
  }

  switch (this.id) {
    case 'click1':
      // console.log(document.getElementById('res1').innerHTML)
      if (document.getElementById('res1').innerHTML.trim() === ('.')) {
        $('#res1').html('')
        $('#res1').append(token)
        store.cells[0] = token
        store.i = 0
        store.flag = !store.flag
      }
      break
    case 'click2':
      if (document.getElementById('res2').innerHTML.trim() === ('.')) {
        $('#res2').html('')
        $('#res2').append(token)
        store.cells[1] = token
        store.i = 1
        store.flag = !store.flag
      }
      break
    case 'click3':
      if (document.getElementById('res3').innerHTML.trim() === ('.')) {
        $('#res3').html('')
        $('#res3').append(token)
        store.cells[2] = token
        store.i = 2
        store.flag = !store.flag
      }
      break
    case 'click4':
      if (document.getElementById('res4').innerHTML.trim() === ('.')) {
        $('#res4').html('')
        $('#res4').append(token)
        store.cells[3] = token
        store.i = 3
        store.flag = !store.flag
      }
      break
    case 'click5':
      if (document.getElementById('res5').innerHTML.trim() === ('.')) {
        $('#res5').html('')
        $('#res5').append(token)
        store.cells[4] = token
        store.i = 4
        store.flag = !store.flag
      }
      break
    case 'click6':
      if (document.getElementById('res6').innerHTML.trim() === ('.')) {
        $('#res6').html('')
        $('#res6').append(token)
        store.cells[5] = token
        store.i = 5
        store.flag = !store.flag
      }
      break
    case 'click7':
      if (document.getElementById('res7').innerHTML.trim() === ('.')) {
        $('#res7').html('')
        $('#res7').append(token)
        store.cells[6] = token
        store.i = 6
        store.flag = !store.flag
      }
      break
    case 'click8':
      if (document.getElementById('res8').innerHTML.trim() === ('.')) {
        $('#res8').html('')
        $('#res8').append(token)
        store.cells[7] = token
        store.i = 7
        store.flag = !store.flag
      }
      break
    case 'click9':
      if (document.getElementById('res9').innerHTML.trim() === ('.')) {
        $('#res9').html('')
        $('#res9').append(token)
        store.cells[8] = token
        store.i = 8
        store.flag = !store.flag
      }
      break
  }
  ui.onClick(this)
  onMoves() // update API
  const someoneWins = IsWinFunction()
  const itIsTie = IsTieFunction()
  store.over = someoneWins || itIsTie
  // console.log('tie function return ' + a)
  if (store.over) {
    for (let i = 1; i < 10; i++) {
      $('#click' + i).unbind()
    }
    if (someoneWins) {
      console.log(store.winner + ' wins ')
    } else if (itIsTie) {
      console.log(' it is a tie')
    }
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  // start
  for (let i = 1; i < 10; i++) {
    $('#res' + i).html(' ')
    $('#res' + i).append(' i ')
    store.cells = ['', '', '', '', '', '', '', '', '']
  }
  api.createGame()
    .then(ui.createSuccess)
    .catch(ui.createSuccess)
}

const onMoves = function (event) {
  event.preventDefault()
  api.userMoves(store.i, store.cells[store.i], store.over)
    .then(ui.movesSuccess)
    .catch(ui.movesSuccess)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesSuccess)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#newGame').on('click', onCreateGame)
  $('#getGames').one('click', onGetGames)
}
module.exports = {
  clicked,
  addHandlers
}
