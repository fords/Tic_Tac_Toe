// const getFormFields = require('../../lib/get-form-fields')    error path
const api = require('./api.js')
const ui = require('./ui.js')

const clicked = function (event) {
  event.preventDefault()
  console.log('it is clicked. id is ' + this.id)
  // $('#res1').html('')

  switch (this.id) {
    case 'click1':
      // console.log(document.getElementById('res1').innerHTML)
      if (document.getElementById('res1').innerHTML.trim() === ('.')) {
        $('#res1').html('')
        $('#res1').append('X')
      }
      break
    case 'click2':
      if (document.getElementById('res2').innerHTML.trim() === ('.')) {
        $('#res2').html('')
        $('#res2').append('2')
      }
      break
    case 'click3':
      if (document.getElementById('res3').innerHTML.trim() === ('.')) {
        $('#res3').html('')
        $('#res3').append('2')
      }
      break
    case 'click4':
      if (document.getElementById('res4').innerHTML.trim() === ('.')) {
        $('#res4').html('')
        $('#res4').append('2')
      }
      break
    case 'click5':
      if (document.getElementById('res5').innerHTML.trim() === ('.')) {
        $('#res5').html('')
        $('#res5').append('2')
      }
      break
    case 'click6':
      if (document.getElementById('res6').innerHTML.trim() === ('.')) {
        $('#res6').html('')
        $('#res6').append('6')
      }
      break
    case 'click7':
      if (document.getElementById('res7').innerHTML.trim() === ('.')) {
        $('#res7').html('')
        $('#res7').append('2')
      }
      break
    case 'click8':
      if (document.getElementById('res8').innerHTML.trim() === ('.')) {
        $('#res8').html('')
        $('#res8').append('2')
      }
      break
    case 'click9':
      if (document.getElementById('res9').innerHTML.trim() === ('.')) {
        $('#res9').html('')
        $('#res9').append('2')
      }
      break
  }
  ui.onClick(this)
}

module.exports = {
  clicked
}
