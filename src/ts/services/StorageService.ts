import Game from "../models/Game";

export default class StorageService {
    private currentGame? : Game;
    private games = {} as {[key:string] : Game};//: Map<string, Game> = new Map<string, Game>();

    constructor() {
        let storage = window.localStorage;

        if (storage.getItem('games') === null)
            return;

        let gamesString = storage.getItem('games');
        if(gamesString === null)
            return;

        let gamesJson = JSON.parse(gamesString);
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

    loadGame(date: Date): Game|null {
        let game = this.games[date.toLocaleDateString()];
        if (game !== undefined)
            return game;

        return null;
    }
}