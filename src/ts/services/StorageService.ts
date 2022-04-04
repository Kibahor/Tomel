import {Game} from 'src/ts/models/Game'

export class StorageService {
    private currentGame: Game;
    private games: Map<string, Game> = new Map<string, Game>();

    constructor() {
        let storage = window.localStorage;

        if (storage.getItem('games') !== null) {
            let gamesJson = JSON.parse(storage.getItem('games'));

            Object.entries(gamesJson).forEach(([key, value]) => {
                this.games[key] = Game.fromJSON(value, this);
            });
        }
    }

    saveGame(game: Game): StorageService {  
        this.currentGame = game;
        let date = this.currentGame.getDateGame().toLocaleDateString();
        if (this.games[date] === undefined) {
            this.games[date] = this.currentGame;
        }

        let storage = window.localStorage;
        storage.setItem('games', JSON.stringify(Object.assign({}, this.games)));

        return this;
    }

    loadGame(date: Date): Game {
        let game = this.games[date.toLocaleDateString()];
        if (game !== undefined)
            return game;

        return null;
    }
}