const config = require('../config/config');
const unirest = require('unirest');

function getFootballUpdates(req, res) {
  var unirest = require("unirest");

  var req = unirest("GET", config.url);

  req.headers({
    "x-rapidapi-host": config.host,
    "x-rapidapi-key": config.key
  });

  req.end(function (result) {
    if (result.error) throw new Error(result.error);

    if (result.status == 200) {
    
      let games = [];
  
      let dataArray = result.body;
      let mainData = dataArray.data;

          mainData.forEach(data => {
        
              let date = data.date;
              let home_team = data.home_team.full_name;
              let home_team_score = data.home_team_score;
              let status = data.status;
              let season = data.season;
              let visitor_team = data.visitor_team.full_name;
              let visitor_team_score = data.visitor_team_score;
          
              let allGames = {
                  date,
                  home_team,
                  home_team_score,
                  status,
                  season,
                  visitor_team,
                  visitor_team_score
              } 
          
              games.push(allGames)
          });

      return res.status(200).json(games);
    }
    
  });
    
}

module.exports = getFootballUpdates;

// http://localhost:5000/api/v1/updates