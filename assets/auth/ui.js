'use strict'
// const store = require('../store.js')

const store = require('../scripts/store.js')

const showTeamsTemplate = require('../scripts/helpers/team-listing.handlebars')

const signUpSuccess = function () {
  $('#display-message').html('Sign up successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#sign-out-button').show()
  $('#get-data').show()
  $('#list-teams').show()
  $('#create-team').show()
  $('#clear-data').show()
  $('#content').show()
}

const signInFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#display-message').html('Change Password successful')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign Out successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#count-games-button').hide()
  $('#count-game-display').hide()
  $('#get-data').hide()
  $('#list-teams').hide()
  $('#create-team').hide()
  $('#clear-data').hide()
  $('#content').hide()
  // $('#change-password-form').clear()
  $('#change-password-form').trigger('reset')
}

const signOutFailure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const getTeamSuccess = function (data) {
  // $('#list-teams').html('Team List')
  // $('#list-teams').css('color', 'blue')
  const showTeamsHtml = showTeamsTemplate({ teams: data.teams })
  $('#content').html(showTeamsHtml)
  $('.update-form').on('submit', (e) => {
    e.preventDefault()
    console.log('update teams')
  })
}

const getTeamFailure = function () {
  $('display-message').html('Something wwent wrong with server')
  $('display-message').css('color', 'red')
}

const createTeamsSuccess = function () {
  $('#list-teams').html('Create Team test')
  // const showAllTeams =
}

const createTeamsFailure = function () {
  $('#list-teams').html('Create Team failed')
  $('#list-teams').css('color', 'red')
}

const clearTeamsSuccess = function () {
  $('#display-message').html('Deleted team')
}

const clearTeamsFailure = function () {
  $('#list-teams').html('Failed to Delete Team')
  $('#list-teams').css('color', 'red')
}

const updateTeamSuccess = function () {
$('#list-teams').html('Updated team')
$('#get-data').click()
}

const updateTeamFailure = function () {
  $('#list-teams').html('Failed to Update Team')
  $('#list-teams').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  getTeamSuccess,
  getTeamFailure,
  createTeamsSuccess,
  createTeamsFailure,
  clearTeamsSuccess,
  clearTeamsFailure,
  updateTeamSuccess,
  updateTeamFailure
}
