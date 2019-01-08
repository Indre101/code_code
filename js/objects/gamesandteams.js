const team = {
  //players 
  _players: [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Indre',
      lastName: 'Zyg',
      age: 20
    },
    {
      firstName: 'Zygis',
      lastName: 'Butas',
      age: 45
    }
  ],

  ///games 
  _games: [{
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Zalgiris',
      teamPoints: 432,
      opponentPoints: 247
    },
    {
      opponent: 'LT',
      teamPoints: 34,
      opponentPoints: 54
    }
  ],

  // adding a player method  
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    }

    this._players.push(player);
  },

  //adding a game
  addGame(opponent, teamPoint, opponentPoints) {
    const newGame = {
      opponent,
      teamPoint,
      opponentPoints
    }
    this._games.push(newGame)
  }
}

team.addGame('donke', 32, 65);
console.log(team._games);