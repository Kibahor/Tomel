import GameService from '/src/ts/services/GameService';
import Constants from '/src/ts/Constants';

export default {
    props: {
        word: String,
        essai: Number
    },
    data() {
        return {
            activeColors: []
        }
    },
    methods: {
        addMessage(message) {
            this.$emit('addMessage', message);
        },
        clearMessage() {
            this.$emit('clearMessage');
        },

        nextCase(event, indice) {
            const inputs = this.getInputsFromLine();

            if (event.code === Constants.BackspaceCode && indice > 1) {
                indice = indice - 2;
                inputs[indice].value = '';
            }

            const nextInput = inputs[indice];
            nextInput.focus();
        },
        validLine() {
            this.assertRequiredLetters();

            const wordUser = this.getUserFullWord();
            let game = GameService.getCurrentGame();
            let letters = game.getWordToFind().getLetters();

            if (game.isWordFound(wordUser)) {
                this.$emit('wordFound');
                return;
            }

            for (let i in wordUser) {
                let letter = letters[i];
                let color = Constants.Blanc;

                if (letter.good_position) {
                    color = Constants.Vert;
                } else if (letter.good_letter) {
                    color = Constants.Jaune;
                } else {
                    color = Constants.Rouge;
                }

                this.activeColors.push(color);
            }

            this.$emit('changeLine');
        },
        getInputsFromLine() {
            return document.querySelectorAll('#try-' + this.essai + ' > input');
        },
        assertRequiredLetters() {
            let inputs = this.getInputsFromLine();
            if (!Array.from(inputs).every(input => input.value !== '')) {
                throw 'Veuillez renseigner tout les champs';
            }

            if (!Array.from(inputs).every(input => this.validLetter(input.value))) {
                throw 'Veuillez n\'utiliser que des lettres';
            }
        },
        validLetter(letter) {
            let regex = /^[A-Za-z]$/y;
            return regex.test(letter)
        },
        getUserFullWord() {
            let inputs = this.getInputsFromLine();
            let word = '';
            inputs.forEach(function(el) {
                word += el.value;
            });

            return word;
        }
    },
    template: `
        <div class="essai" v-bind:id="'try-' + essai">
            <case v-for="number in word.length"
                  v-bind:totalLetter=word.length 
                  v-bind:indice=number 
                  v-bind:activeColors=activeColors
                  v-bind:essai=essai
                  @add-message="addMessage"
                  @next-case="nextCase"
                  @clear-message="clearMessage"
                  @valid-line="validLine"></case>
        </div>
        `
}