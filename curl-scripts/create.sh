

const createTeams = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/teams',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
