const express = require('express')
const urllib = require('urllib')
const router = express.Router()

const teamToIDs = 
  {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756" 
  }

urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (_err, data) {
  //const dataString = data.toString()
  const playersObj = JSON.parse(data) 
  const players = playersObj.league.standard

  router.get('/teams/:teamName', function (request, response) {
    const teamName = request.params.teamName
    const teamid = teamToIDs[teamName]
    const teamPlayers = players.filter(p =>
      p.teamId === teamid && p.isActive
    )
    response.send(teamPlayers)
  })
})

module.exports = router
