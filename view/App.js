import Try from '/view/components/Try.js';
import Case from '/view/components/Case.js';
import Grid from '/view/components/Grid.js';

import ShareItem from '/view/components/successModal/ShareItem.js';
import SuccessInsertModal from '/view/components/successModal/SuccessInsertModal.js';
import SuccessInsertBody from '/view/components/successModal/SuccessInsertBody.js';

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
                word: this.getWord(),
                isFinish: false,
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
            },
            wordFound() {
                this.addMessage('Word has been found !');
                this.isFinish = true;

                console.log(this.isFinish);
            }
        }
    }).component('Try', Try)
    .component('Case', Case)
    .component('Grid', Grid)
    .component('SuccessInsertModal', SuccessInsertModal)
    .component('SuccessInsertBody', SuccessInsertBody)
    .component('ShareItem', ShareItem)
    .mount('#app');