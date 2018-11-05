// const config = require('../../config')
const store = require('../../store')

const onClick = function (obj) {
  // alert('Button clicked, id ' + obj + ', text' + obj.innerHTML)
  // console.log(obj)
}
const signUpSuccess = function (data) {
  $('#userMessage').html(' ')
  $('#userMessage').text('Signed up successfully')
  // $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#userMessage').html(' ')
  $('#userMessage').text('Signed in successfully')
  store.user = data.user
  $('.signInUp').css('display', 'none')
  $('.sign-inup-buttons').css('display', 'none')
  // $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (data) {
  $('#changedPassword').text('Password changed successfully')
  $('#change-password').css('display', 'none')
  // $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  $('#userMessage').html(' ')
  $('#userMessage').text('Signed out successfully')
  $('.signInUp').css('display', 'block')
  // $('.container').css('display', 'none')
  $('.userButtons').css('display', 'none')
  $('.sign-inup-buttons').css('display', 'block')
  $('.userInfo').css('display', 'none')
  store.user = null
}

const createSuccess = function (data) {
  $('#userMessage').html(' ')
  $('#userMessage').text('create board successfully')
  store.game = data.game
  store.game.id = data.game.id
}

const getGamesSuccess = function (data) {
  for (let i = 0; i < data.games.length; i++) {
    $('#view-games').append('<p><b>ID:</b>' + data.games[i].id + '    <b>Game Squares</b>' + data.games[i].cells + '</p>')
  }
}

const failure = function () {
  $('#userMessage').html(' ')
  $('#userMessage').text('Error')
  // $('#userMessage').css('background-color', '#300')
}

const movesSuccess = function () {
  $('#userMessage').html(' ')
  $('#userMessage').text(' moves successfully')
}
module.exports = {
  onClick,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  createSuccess,
  getGamesSuccess,
  failure,
  movesSuccess
}
