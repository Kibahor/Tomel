import Try from '/view/components/Try.js';
import Case from '/view/components/Case.js';
import Grid from '/view/components/Grid.js';

import PerfItem from '/view/components/PerfItem.js';
import ShareItem from '/view/components/ShareItem.js';
import StatItem from '/view/components/StatItem.js';
import SuccessInsertModal from '/view/components/SuccessInsertModal.js';
import SuccessInsertHeader from '/view/components/SuccessInsertHeader.js';
import SuccessInsertBody from '/view/components/SuccessInsertBody.js';

import Constant from '/src/ts/Constants';
import GameService from '/src/ts/services/GameService';

Vue.createApp({
        created: function() {
            document.title = Constant.TITLE;
        },
        errorCaptured: function(err) {
            console.error(err);
            return false;
        },
        mounted: function() {
            let input = document.querySelector('input');
            input.focus()
        },
        data() {
            return {
                title: Constant.TITLE,
                word: this.getWord()
            }
        },
        methods: {
            getWord() {
                return GameService.getCurrentGame().getWordToFind().getWord();
            },

            clearMessage() {
                let div = document.querySelector('#message');
                div.innerHTML = '';
            },
            addMessage(message) {
                let div = document.querySelector('#message');
                let p = document.createElement('p');
                p.innerHTML = message;
                div.append(p);
            }
        }
    }).component('Try', Try)
    .component('Case', Case)
    .component('Grid', Grid)
    .component('SuccessInsertModal', SuccessInsertModal)
    .component('SuccessInsertHeader', SuccessInsertHeader)
    .component('SuccessInsertBody', SuccessInsertBody)
    .component('StatItem', StatItem)
    .component('PerfItem', PerfItem)
    .component('ShareItem', ShareItem)
    .mount('#app');