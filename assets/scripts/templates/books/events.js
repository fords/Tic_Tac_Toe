// const getFormFields = require('../../lib/get-form-fields')    error path
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../../store.js')
const clicked = function (event) {
  event.preventDefault()
  let Iswin = IsWin(event)

  console.log('it is clicked. id is ' + this.id)
  // $('#res1').html('')
  // let flag = true
  let token = 'X'
  if (store.flag === true) {
    token = 'X'
    // console.log('store XX')
  } else if (store.flag === false) {
    token = '0'
    // console.log('store Y')
  }
  console.log(store.flag)
  switch (this.id) {
    case 'click1':
      // console.log(document.getElementById('res1').innerHTML)
      if (document.getElementById('res1').innerHTML.trim() === ('.')) {
        $('#res1').html('')
        $('#res1').append(token)
        store.flag = !store.flag
        console.log(store.flag)
      }
      break
    case 'click2':
      if (document.getElementById('res2').innerHTML.trim() === ('.')) {
        $('#res2').html('')
        $('#res2').append(token)
        store.flag = !store.flag
      }
      break
    case 'click3':
      if (document.getElementById('res3').innerHTML.trim() === ('.')) {
        $('#res3').html('')
        $('#res3').append(token)
        store.flag = !store.flag
      }
      break
    case 'click4':
      if (document.getElementById('res4').innerHTML.trim() === ('.')) {
        $('#res4').html('')
        $('#res4').append(token)
        store.flag = !store.flag
      }
      break
    case 'click5':
      if (document.getElementById('res5').innerHTML.trim() === ('.')) {
        $('#res5').html('')
        $('#res5').append(token)
        store.flag = !store.flag
      }
      break
    case 'click6':
      if (document.getElementById('res6').innerHTML.trim() === ('.')) {
        $('#res6').html('')
        $('#res6').append(token)
        store.flag = !store.flag
      }
      break
    case 'click7':
      if (document.getElementById('res7').innerHTML.trim() === ('.')) {
        $('#res7').html('')
        $('#res7').append(token)
        store.flag = !store.flag
      }
      break
    case 'click8':
      if (document.getElementById('res8').innerHTML.trim() === ('.')) {
        $('#res8').html('')
        $('#res8').append(token)
        store.flag = !store.flag
      }
      break
    case 'click9':
      if (document.getElementById('res9').innerHTML.trim() === ('.')) {
        $('#res9').html('')
        $('#res9').append(token)
        store.flag = !store.flag
      }
      break
  }
  ui.onClick(this)
}

const IsWin = function (event) {
  if (document.getElementById('res1').innerHTML === ('X') &&
document.getElementById('res2').innerHTML.trim() === ('X') &&
document.getElementById('res3').innerHTML.trim() === ('X')) {
    console.log('winner')
    return true
  }
}

module.exports = {
  clicked
}
