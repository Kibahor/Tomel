import Game from '../models/Game';
import WordDictionnary from '../models/WordDictionnary';
import StorageService from './StorageService';

export default class GameService {
    static getCurrentGame(): Game{
        let date = new Date();
        let storageService = new StorageService();
        let game = storageService.loadGame(date);
        if (game === null) {
            let dictionnary = new WordDictionnary();
            game = new Game(dictionnary.getRandomWord(date), storageService); //TODO récupérer le mot à deviner depuis WordDictionnary.getRandomWord
        }

        return game;
    }
}