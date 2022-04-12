import Try from '../../view/components/Try.js';
import Case from '../../view/components/Case.js';

import SuccessInsertModal from '../../view/components/SuccessInsertModal.js';
import SuccessInsertHeader from '../../view/components/SuccessInsertHeader.js';
import SuccessInsertBody from '../../view/components/SuccessInsertBody.js';

import StatItem from '../../view/components/StatItem.js';
import PerfItem from '../../view/components/PerfItem.js';
import ShareItem from '../../view/components/ShareItem.js';


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
}).component('Try',Try).component('Case',Case)
.component('SuccessInsertModal',SuccessInsertModal).component('SuccessInsertHeader',SuccessInsertHeader).component('SuccessInsertBody',SuccessInsertBody)
.component('StatItem',StatItem).component('PerfItem',PerfItem).component('ShareItem',ShareItem)
.mount('body');

let input = document.querySelector('input');
input.focus()