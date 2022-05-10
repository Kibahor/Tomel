import GameService from '/src/ts/services/GameService';

export default {
    props: {
        word: String,
        essai: Number,
    },
    methods: {
        addMessage(message) {
            this.$emit('addMessage', message);
        },
        clearMessage() {
            this.$emit('clearMessage');
        },
        validLine() {
            const word = this.getUserFullWord();
            const game = GameService.getCurrentGame();

            const succeed = game.isWordFound(word);
            console.log(succeed);
            console.log(game);

            this.disableLine();
            this.openLine();
        },

        getUserFullWord() {
            let inputs = document.querySelectorAll('#try-' + this.essai + ' > input');
            let word = '';
            inputs.forEach(function(el) {
                word += el.value;
            });

            return word;
        },

        openLine() {
            let inputs = this.getInputsFromLine(this.essai);
            inputs.forEach(function(input) {
                input.removeAttribute('disabled');
            });

            inputs[0].focus();
        },
        disableLine() {
            this.getInputsFromLine(this.essai - 1).forEach(function(input) {
                input.setAttribute('disabled', '');
            });
        },
        getInputsFromLine(line) {
            let tries = document.querySelectorAll('.essai');

            return tries[line].querySelectorAll('input');
        }
    },
    template: `
        <div class="essai" v-bind:id="'try-' + essai">
            <case v-for="number in word.length"
                  v-bind:totalLetter=word.length 
                  v-bind:indice=number 
                  v-bind:essai=essai
                  @add-message="addMessage"
                  @clear-message="clearMessage"
                  @valid-line="validLine"></case>
        </div>
        `
}