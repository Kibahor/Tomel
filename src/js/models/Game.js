class Game{
    #dateGame = new Date();
    #wordToFind = null;
    #tryToSuccess = 0;
    #succeed = false;

    #storageService;

    constructor(wordToFind, storageService){
        if(!storageService instanceof StorageService)
            throw new TypeError('Le paramètre storageService doit être de type StorageService');
            
        if(!wordToFind instanceof String)
            throw new TypeError('Le paramètre wordToFind doit être de type String');

        this.#storageService = storageService;
        this.#wordToFind = new Word(wordToFind);
        this.#storageService.saveGame(this);
    }
    
    firstLetter(){
        return this.#wordToFind.firstLetter();
    }

    isWordFound(proposalWord){            
        if(!wordToFind instanceof String)
            throw new TypeError('Le paramètre proposalWord doit être de type String');

        if(this.#succeed || this.#tryToSuccess >= Constant.MAXTRY)
            return this.#succeed;

        this.#succeed = this.#wordToFind.compare(proposalWord);
        this.#tryToSuccess++;
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
        let wordToFind = gameJson['wordToFind'];
        if(typeof wordToFind === 'object'){
            if(wordToFind['word']['word'] != undefined){
                wordToFind = wordToFind['word']['word'];
            }
            else{
                wordToFind = wordToFind['word'];
            }
        }

        let game = new Game(wordToFind, storageService);
        game.#dateGame = new Date(gameJson['dateGame']);
        game.#tryToSuccess = gameJson['tryToSuccess'];
        game.#succeed = gameJson['succeed'];

        return game;
    }
}