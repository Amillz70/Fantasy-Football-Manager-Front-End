'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // console.log(store.user)
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGetTeams = function () {
  api.getTeams()
    .then(ui.getTeamSuccess)
    .catch(ui.getTeamFailure)
}

const onCreateTeams = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log('data is', data)
  api.createTeams(data)
    .then(ui.createTeamsSuccess)
    .catch(ui.createTeamsFailure)
}

const onClearTeams = function () {
  api.clearTeams()
    .then(ui.clearTeamsSuccess)
    .catch(ui.clearTeamsFailure)
}

const updateTeams = function () {
  api.updateTeams()
    .then(ui.updateTeamSuccess)
    .catch(ui.updateTeamFailure)
}

const addHandlers = () => {
$('#get-data').on('click', onGetTeams)
$('#create-team').on('click', onCreateTeams)
$('#clear-data').on('click', onClearTeams)
// $('#create-team').on('click', updateTeams)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  // onGetTeams,
  // onCreateTeams,
  // onClearTeams,
  updateTeams,
  addHandlers
}
