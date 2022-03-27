import  {StorageService } from '../services/StorageService'
import { Word } from './Word'
import { Constants } from '../Constants'

export class Game{
    private dateGame : Date = new Date();
    private wordToFind : Word = null;
    private tryToSuccess : number = 0;
    private succeed : boolean = false;

    storageService : StorageService;

    constructor(wordToFind: string, storageService: StorageService){
        this.storageService = storageService;
        this.wordToFind = new Word(wordToFind);
        this.storageService.saveGame(this);
    }
    
    firstLetter(): string{
        return this.wordToFind.firstLetter();
    }

    isWordFound(proposalWord: string): boolean{
        if(this.tryToSuccess < Constants.MAXTRY)
            return this.succeed;

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
        let game = new Game('', storageService);
        game.dateGame = gameJson['dateGame'];
        game.wordToFind = gameJson['wordToFind'];
        game.tryToSuccess = gameJson['tryToSuccess'];
        game.succeed = gameJson['succeed'];

        return game;
    }
}