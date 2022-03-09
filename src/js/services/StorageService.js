class StorageService{
    #currentGame;
    #games = {};

    constructor(){
        let storage = window.localStorage;

        if(storage.getItem('games') !== undefined)
            this.#games = JSON.parse(storage.getItem('games'));
    }

    saveGame(game){
        if(!game instanceof Game)
            throw new TypeError('Le paramètre game doit être de type Game');

        this.#currentGame = game;
        let date = this.#currentGame.dateGame.toLocaleDateString();
        if(this.#games.indexOf(date) === -1){
            this.games[date] = this.currentGame;
        }
        
        let storage = window.localStorage;
        storage.setItem('games', JSON.stringify(Object.assign({}, this.games)));

        return this;
    }

    loadGame(date){
        if(!date instanceof Date)
            throw new TypeError('Le paramètre date doit être de type Date');

        let game = this.#games[date.toLocaleDateString()];
        if(game !== undefined)
            return game;

        return null;
    }
}