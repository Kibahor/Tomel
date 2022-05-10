import Constants from "../Constants";
import StorageService from "../services/StorageService";
import Word from "./Word";


export default class Game{
    private dateGame : Date = new Date();
    private wordToFind : Word;
    private tryToSuccess : number = 0;
    private succeed : boolean = false;

    public storageService : StorageService;

    constructor(wordToFind: string, storageService: StorageService|null){
        this.wordToFind = new Word(wordToFind);

        if(storageService != null) {
            this.storageService = storageService;
            this.storageService.saveGame(this);
        }
    }

    getWordToFind(): Word{
        return this.wordToFind;
    }
    
    firstLetter(): string{
        if(this.wordToFind === null)
            throw new Error('Aucun mot à trouver');

        return this.wordToFind.firstLetter();
    }

    isWordFound(proposalWord: string): boolean{
        if(this.tryToSuccess > Constants.MAXTRY)
            return this.succeed;

        if(this.wordToFind === null)
            throw new Error('Aucun mot à trouver');

        this.succeed = this.wordToFind.compare(proposalWord);
        this.tryToSuccess++;
        this.storageService.saveGame(this);

        return this.succeed;
    }

    getDateGame(): Date{
        return this.dateGame;
    }

    toJSON(): any{
        return {
            dateGame: this.dateGame,
            wordToFind: this.wordToFind,
            tryToSuccess: this.tryToSuccess,
            succeed: this.succeed,
        }
    }

    static fromJSON(gameJson: any, storageService: StorageService): Game{
        let game = new Game('', null);
        game.dateGame = gameJson['dateGame'];
        game.wordToFind = gameJson['wordToFind'];
        game.tryToSuccess = gameJson['tryToSuccess'];
        game.succeed = gameJson['succeed'];

        storageService.saveGame(game);

        return game;
    }
}