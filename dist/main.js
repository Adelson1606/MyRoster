const source = $('#template').html()
const template = Handlebars.compile(source)

const showTeam = function () {
  const input = $('#input-team').val()

  $.get(`teams/${input}`, function (teamPlayers) {
    $('.results').empty()
    const newHTML = template({ teamPlayers })
    $('.results').append(newHTML)
  })
}

