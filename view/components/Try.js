import GameService from '/src/ts/services/GameService';
import Constant from '/src/ts/Constants';

export default {
    props: {
        word: String,
        essai: Number,
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

            if (event.code === Constant.BackspaceCode && indice > 1) {
                indice = indice - 2;
                inputs[indice].value = '';
            }

            const nextInput = inputs[indice];
            nextInput.focus();
        },
        validLine() {
            this.assertRequiredLetters();

            const wordUser = this.getUserFullWord();
            const game = GameService.getCurrentGame();
            if(game.isWordFound(wordUser)){
                console.log('Word has been found !');
                return;
            }
            let letters = game.getWordToFind().getLetters();
            console.log(letters);
            for(let i in wordUser){
                let letter = letters[i];
                let color= Constant.Blanc;
                if(letter.good_position){
                    color=Constant.Vert;
                }else if(letter.good_letter){
                    color=Constant.Jaune;
                }else{
                    color=Constant.Rouge;
                }
                this.activeColors.push(color);
            }

            this.$emit(nextLine)
        },
        getInputsFromLine() {
            return document.querySelectorAll('#try-' + this.essai + ' > input');
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
        }
    },
    template: `
        <div class="essai" v-bind:id="'try-' + essai">
            <case v-for="number in word.length"
                  v-bind:totalLetter=word.length 
                  v-bind:indice=number 
                  v-bind:activeColors=activeColors
                  @add-message="addMessage"
                  @next-case="nextCase"
                  @clear-message="clearMessage"
                  @valid-line="validLine"></case>
        </div>
        `
}