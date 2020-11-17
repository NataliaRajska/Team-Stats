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
        },
        {
            opponent: 'Hugs',
            teamPoints: 22,
            opponentPoints: 23
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    //=========================
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this._players.push(player);
    }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);


