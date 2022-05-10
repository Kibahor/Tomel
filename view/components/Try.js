import GameService from '/src/ts/services/GameService';
import Constant from '/src/ts/Constants';

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

        nextCase(event, indice) {
            const inputs = this.getInputsFromLine();

            if (event.code === Constant.BackspaceCode && indice > 1) {
                indice = indice - 2;
                inputs[indice].value = '';
            }

            const nextInput = inputs[indice];
            nextInput.focus();
        },
        validLine() {
            this.assertRequiredLetters();

            const word = this.getUserFullWord();
            const game = GameService.getCurrentGame();

            const succeed = game.isWordFound(word);

            //todo pour Lukas
            //foreach des case
            //pour chaque case, lui indiquer sa couleur d'affichage : vert => lettre bien placée, jaune => lettre trouvée ailleurs sinon blanc

            this.disableLine();
            this.nextLine();
        },
        //todo pour lukas : todo déplacer le changement de ligne dans App.js
        nextLine() {
            let inputs = this.getInputsFromLine();
            inputs.forEach(function(input) {
                input.removeAttribute('disabled');
            });

            inputs[0].focus();
        },
        disableLine() {
            this.getInputsFromLine().forEach(function(input) {
                input.setAttribute('disabled', '');
            });
        },

        assertRequiredLetters() {
            let inputs = this.getInputsFromLine();
            if (!Array.from(inputs).every(input => input.value !== '')) {
                throw 'Veuillez renseigner tout les champs';
            }
        },
        getUserFullWord() {
            let inputs = this.getInputsFromLine();
            let word = '';
            inputs.forEach(function(el) {
                word += el.value;
            });

            return word;
        },
        getInputsFromLine() {
            return document.querySelectorAll('#try-' + this.essai + ' > input');
        }
    },
    template: `
        <div class="essai" v-bind:id="'try-' + essai">
            <case v-for="number in word.length"
                  v-bind:totalLetter=word.length 
                  v-bind:indice=number 
                  v-bind:essai=essai
                  @add-message="addMessage"
                  @next-case="nextCase"
                  @clear-message="clearMessage"
                  @valid-line="validLine"></case>
        </div>
        `
}