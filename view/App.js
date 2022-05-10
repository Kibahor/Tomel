import Try from '/view/components/Try.js';
import Case from '/view/components/Case.js';

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
            maxTry: Constant.MAXTRY,
            word: this.recupWord(),
            firstLetter: this.firstLetter()
        }
    },
    methods: {
        recupWord() {
            return GameService.getCurrentGame().getWordToFind().getWord();
        },
        firstLetter() {
            return GameService.getCurrentGame().firstLetter();
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
}).component('Try', Try).component('Case', Case).mount('#app');