class Game{
    #dateGame = new Date();
    #wordToFind;
    #tryToSuccess = 0;
    #succeed;

    #storageService;

    constructor(wordToFind, storageService){
        if(!date instanceof StorageService)
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
}