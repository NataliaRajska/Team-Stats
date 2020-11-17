const team = {
    _players: [
        {
            firstName: 'Jacek',
            lastName: 'Dylu',
            age: 31
        },
        {
            firstName: 'Natalia',
            lastName: 'Raj',
            age: 30
        }
    ],
    _games: [
        {
            opponent: 'Love',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Peace',
            teamPoints: 40,
            opponentPoints: 12
        }
    ],
    //=========================
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this._players.push(player)
    }

};



