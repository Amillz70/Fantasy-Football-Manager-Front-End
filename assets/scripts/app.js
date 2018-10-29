'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('../auth/events.js')
// use require without a reference to ensure a file is bundled'
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp) // .hide()
  $('#sign-in-form').on('submit', authEvents.onSignIn) // .hide()
  $('#change-password-form').on('submit', authEvents.onChangePassword) // .hide()
  $('#sign-out-button').on('click', authEvents.onSignOut) // .hide()
  $('#get-data').on('click', authEvents.onGetTeams) // .hide()
  // $('#content').on('submit', '.update-form', authEvents.updateTeams)
  // $('#clear-data').on('submit', authEvents.onClearTeam)
  // $('#clear-data').on('click', authEvents.onClearTeams) // .hide()

  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#get-data').hide()
  $('#clear-data').hide()
  $('#list-teams').hide()
  $('#create-team').hide()
  $('#content').hide()
  // $('#get-team').hide()

  authEvents.addHandlers()
})
