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
            actualTry: 1,
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
        },
        getInputsFromLine() {
            return document.querySelectorAll('#try-' + this.actualTry + ' > input');
        },
        nextLine() {
            let inputs = this.getInputsFromLine();
            inputs.forEach(function(input) {
                input.removeAttribute('disabled');
            });
        
            inputs[0].focus();
            this.actualTry++;
        },
        disableLine() {
            this.getInputsFromLine().forEach(function(input) {
                input.setAttribute('disabled', '');
            });
        },
    }
}).component('Try', Try).component('Case', Case).mount('#app');