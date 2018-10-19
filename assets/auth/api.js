'use strict'
const store = require('../scripts/store.js')
const config = require('../scripts/config.js')

const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userData
  })
}

const changePassword = function (passwordData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const getTeams = function () {
  return $.ajax({
    url: config.apiUrl + '/teams',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const clearTeams = function () {
//   return $.ajax({
//     url: config.apiUrl + '/teams',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'DELETE'
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getTeams,
  clearTeams
}
