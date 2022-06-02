import Game from '../models/Game';
import WordDictionnary from '../models/WordDictionnary';
import StorageService from './StorageService';

export default class GameService {
    static getCurrentGame(): Game{
        const date = new Date();
        const storageService = new StorageService();
        let game = storageService.loadGame(date);
        if (game === null) {
            const dictionnary = new WordDictionnary();
            game = new Game(dictionnary.getRandomWord(date), storageService);
        }

        return game;
    }
}