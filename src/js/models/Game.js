class Game{
    #dateGame = new Date();
    #wordToFind = null;
    #tryToSuccess = 0;
    #succeed = false;

    #storageService;

    constructor(wordToFind, storageService){
        if(!storageService instanceof StorageService)
            throw new TypeError('Le paramètre storageService doit être de type StorageService');

        this.#storageService = storageService;
        this.#wordToFind = wordToFind;
        this.#storageService.saveGame(this);
    }
    
    firstLetter(){
        return this.#wordToFind[0];
    }

    isWordFound(proposalWord){

        if(this.#tryToSuccess < MaxTry)
            return this.#succeed;

        proposalWord.compare(wordToFind);
        this.#tryToSuccess++;
        this.#succeed = proposalWord.tabPositions.includes(1);
        this.#storageService.saveGame(this);

        return this.#succeed;
    }

    getDateGame(){
        return this.#dateGame;
    }

    toJSON(){
        return {
            dateGame: this.#dateGame,
            wordToFind: this.#wordToFind,
            tryToSuccess: this.#tryToSuccess,
            succeed: this.#succeed,
        }
    }

    static fromJSON(gameJson, storageService){
        let game = new Game('', storageService);
        game.#dateGame = gameJson['dateGame'];
        game.#wordToFind = gameJson['wordToFind'];
        game.#tryToSuccess = gameJson['tryToSuccess'];
        game.#succeed = gameJson['succeed'];

        return game;
    }
}