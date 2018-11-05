'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./templates/books/events.js')
const store = require('./store.js')

$(() => {
  // your JS code goes here
  //  $('#create-game').on('click', events.onCreateGameClick)
  store.flag = true
  // Listener event listening to mouse click on board game
  for (let i = 1; i < 10; i++) {
    $('#click' + i).on('click', events.clicked)
    // store.flag = ~store.flag
  }

  // console.log('finish looping in event')
  // if (store.over) {
  //   console.log('it is over')
  // }
})
//
