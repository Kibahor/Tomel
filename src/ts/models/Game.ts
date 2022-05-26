import Constants from "../Constants";
import StorageService from "../services/StorageService";
import Word from "./Word";


export default class Game{
    private dateGame : Date = new Date();
    private wordToFind : Word;
    private tryToSuccess : number = 0;
    private succeed : boolean = false;

    public storageService : StorageService;

    constructor(wordToFind: string, storageService: StorageService){
        this.wordToFind = new Word(wordToFind);
        this.storageService = storageService;
    }

    getWordToFind(): Word{
        return this.wordToFind;
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
        let game = new Game('', storageService); //todo revoir la sauvegarde automatique du mot
        game.dateGame = new Date(gameJson['dateGame']);
        game.wordToFind = Word.fromJSON(gameJson['wordToFind']);
        game.tryToSuccess = gameJson['tryToSuccess'];
        game.succeed = gameJson['succeed'];

        return game;
    }
}