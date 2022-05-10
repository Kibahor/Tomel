import Game from "../models/Game";

export default class StorageService {
    private currentGame? : Game;
    //private games = {} as {[key:string] : Game};//: Map<string, Game> = new Map<string, Game>();
    private games: Map<string, Game> = new Map<string, Game>();

    constructor() {
        const gamesString = window.localStorage.getItem('games');
        if(gamesString === null) {
            return;
        }

        const gamesJson = JSON.parse(gamesString, this.reviver);
        const $this = this
        gamesJson.forEach(function(gameJson: any) {
            const game = Game.fromJSON(gameJson, $this);
            this.games.set(game.getDateGame().toLocaleDateString(), game);
        });
    }

    saveGame(game: Game): StorageService {
        this.currentGame = game;
        const date = this.currentGame.getDateGame().toLocaleDateString();
        if (this.games.get(date) === undefined) {
            this.games.set(date, this.currentGame);
        }

        window.localStorage.setItem('games', JSON.stringify(this.games, this.replacer));

        return this;
    }

    loadGame(date: Date): Game|null {
        const game = this.games.get(date.toLocaleDateString());
        if (game !== undefined)
            return game;

        return null;
    }

    private replacer(key: any, value: any) {
        if(value instanceof Map) {
          return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
          };
        } else {
          return value;
        }
    }

    private reviver(key: any, value: any) {
        if(typeof value === 'object' && value !== null) {
          if (value.dataType === 'Map') {
            return new Map(value.value);
          }
        }

        return value;
    }
}