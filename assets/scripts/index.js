'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./templates/books/events.js')
const store = require('./store.js')

const IsWinFunction = function () {
  if (store.cells[0] !== '' &&
        store.cells[0] === store.cells[1] &&
        store.cells[1] === store.cells[2]) {
    console.log('winner')
    store.winner = document.getElementById('res1').innerHTML
    return true
  }
  return false
}
$(() => {
  // your JS code goes here
  //  $('#create-game').on('click', events.onCreateGameClick)
  store.flag = true
  do {
    for (let i = 1; i < 10; i++) {
      $('#click' + i).on('click', events.clicked)
      // console.log(store.over)
      // store.flag = ~store.flag
    }
    store.over = IsWinFunction()
  }
  while (!store.over)

  // $('#click2').on('click', events.clicked)
  // $('#click3').on('click', events.clicked)
  // $('#click4').on('click', events.clicked)
  // $('#click5').on('click', events.clicked)
  // $('#click6').on('click', events.clicked)
  // $('#click7').on('click', events.clicked)
  // $('#click8').on('click', events.clicked)
  // $('#click9').on('click', events.clicked)
})
//
