import Try from '../../view/components/Try.js';
import Case from '../../view/components/Case.js';



Vue.createApp({
    created () {
        document.title = Constant.TITLE;

        let storageService = new StorageService();
        let game = storageService.loadGame(new Date());
        if (game === null) {
            game = new Game('test', storageService); //TODO récupérer le mot à deviner depuis WordDictionnary.getRandomWord
        }
    },
    data() {
        return {
            title: Constant.TITLE,
            maxTry: Constant.MAXTRY,
            word: 'compromis',
        }
    }
}).component('Try',Try).component('Case',Case).mount('body');

let input = document.querySelector('input');
input.focus()