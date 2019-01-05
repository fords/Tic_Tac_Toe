'use strict'

const events = require('./templates/books/events.js')
const store = require('./store.js')

$(() => {
  //  $('#create-game').on('click', events.onCreateGameClick)
  store.flag = true
  // Listener event listening to mouse click on board game
  for (let i = 1; i < 10; i++) {
    $('#click' + i).on('click', events.clicked)
  }
  events.addHandlers()
//   $(document).ready(function() {
//     const x = document.getElementById("gamePlay")
//     x.autoplay()
// })
  // document.getElementById("gamePlay").autoplay

  $('.gameStatus').css('display', 'none')
  $('.container').css('display', 'none')
  $('.NewGameReset').css('display', 'none')
})
//
