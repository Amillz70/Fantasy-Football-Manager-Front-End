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
    .then(ui.getTeamsSuccess)
    .catch(ui.getTeamsFailure)
}

// const onGetTeam = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.getTeam(data)
//     .then(ui.getTeamSuccess)
//     .catch(ui.getTeamFailure)
// }

const onCreateTeam = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log('data is', data)
  api.createTeams(data)
    .then(ui.createTeamSuccess)
    .catch(ui.createTeamFailure)
}

const onClearTeam = function (event) {
  event.preventDefault()
  const id = $(event.target).attr('data-id')
  // console.log(id)
  // console.log(event.target)
  // const getTeamElement = '[data-id=' + id + ']'
  // $(getTeamElement).empty()

  if ($(event.target).attr('class') === 'clear-team-button') {
    api.clearTeams(id)
      .then(ui.clearTeamSuccess)
      .then(onGetTeams)
      .catch(ui.clearTeamFailure)
  }
}

const updateTeams = function (event) {
  event.preventDefault()
  const id = $(event.target).attr('data-id')
  const data = getFormFields(event.target)
  // console.log(data)

  // if ($(event.target).attr('class') === 'update-team-button') {
  api.updateTeams(id, data)
    .then(ui.updateTeamSuccess)
    .catch(ui.updateTeamFailure)
  // }
}

const addHandlers = () => {
  $('#get-data').on('click', onGetTeams)
  // $('#get-team').on('submit', onGetTeam)
  $('#create-team').on('submit', onCreateTeam)
  $('#content').on('click', '.clear-team-button', onClearTeam)
  $('#content').on('submit', '.update-form', updateTeams)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  // onGetTeams,
  // onCreateTeams,
  // onClearTeams,
  // updateTeams,
  addHandlers
}
