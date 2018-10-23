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
    // console.log('update teams')
  })
}

const getTeamFailure = function () {
  $('#second-display-message').html('Something wwent wrong with server')
  $('#second-display-message').css('color', 'red')
}

const createTeamSuccess = function () {
  $('#second-display-message').html('Created Team')
  // const showAllTeams =
}

const createTeamFailure = function () {
  $('#second-display-message').html('Create Team failed')
  $('#second-display-message').css('color', 'red')
}

const clearTeamSuccess = function () {
  $('#second-display-message').html('Deleted team')
}

const clearTeamFailure = function () {
  $('#second-display-message').html('Failed to Delete Team')
  $('#second-display-message').css('color', 'red')
}

const updateTeamSuccess = function () {
$('#second-display-message').html('Updated team')
$('#get-data').click()
}

const updateTeamFailure = function () {
  $('#second-display-message').html('Failed to Update Team')
  $('#second-display-message').css('color', 'red')
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
  createTeamSuccess,
  createTeamFailure,
  clearTeamSuccess,
  clearTeamFailure,
  updateTeamSuccess,
  updateTeamFailure
}
