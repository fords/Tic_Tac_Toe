// const config = require('../../config')
const store = require('../../store')

const onClick = function (obj) {
  // alert('Button clicked, id ' + obj + ', text' + obj.innerHTML)
  // console.log(obj)
}
const signUpSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed up successfully!!')
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed in successfully!!')
  store.user = data.user
  $('.signInUp').css('display', 'none')
  $('#sign-in')[0].reset()
  $('.container').css('display', 'block')
  $('.gameStatus').css('display', 'block')
  $('.NewGameReset').css('display', 'block')
}

const changePasswordSuccess = function (data) {
  $('#changedPassword').text('Password changed successfully!!')
  // $('#change-password').css('display', 'none')
  $('#change-password')[0].reset()
}

const signOutSuccess = function () {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Signed out successfully!!')
  $('.signInUp').css('display', 'block')
  $('.container').css('display', 'none')
  $('.NewGameReset').css('display', 'none')
  $('.gameStatus').css('display', 'none')
  store.user = null
}

const createSuccess = function (data) {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Game board is created successfully!!')
  store.game = data.game
  store.game.id = data.game.id
}

const getGamesSuccess = function (data) {
  for (let i = 0; i < data.games.length; i++) {
    $('#view-games').append('<p><b>ID:</b>' + data.games[i].id + '    <b>Game Squares</b>' + data.games[i].cells + '</p>')
  }
}

const failure = function () {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text('Error!!!')
}
const passwordFailure = function () {
  $('#changedPassword').html(' ')
  $('#changedPassword').text('Error!!!')
}
const movesSuccess = function () {
  $('#feedbackOnAction').html(' ')
  $('#feedbackOnAction').text(' Moves successfully')
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
  passwordFailure,
  movesSuccess
}
