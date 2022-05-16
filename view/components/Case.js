import Constants from '/src/ts/Constants';
import LetterState from '/src/ts/dtos/LetterState';

export default {
    props: {
        totalLetter: Number,
        indice: Number,
        activeColors: Array
    },
    methods: {
        bindValue(event) {
            event.preventDefault();
            this.$emit('clearMessage');

            if (event.code === Constants.EnterCode) {
                this.$emit('validLine');
                return;
            }

            if (this.indice === this.totalLetter) {
                this.$emit('addMessage', Constants.PressEnter);
                return;
            }

            this.$emit('nextCase', event, this.indice);
        },
    },
    template: `
        <input maxlength="1" 
               class="sf m-2"
               @keyup=bindValue($event)
               v-bind:style="{ backgroundColor: activeColors[indice]}"></input>
        `
        //:disabled="essai != 1"
}