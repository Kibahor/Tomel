import Constants from '/src/ts/Constants';
import LetterState from '/src/ts/dtos/LetterState';

export default {
    props: {
        totalLetter: Number,
        indice: Number,
        essai: Number,
    },
    data() {
        return {
          activeColor: "rgb(255, 255, 255)"
        }
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
        setActiveColor(color){
            this.activeColor=color;
        }
    },
    template: `
        <input maxlength="1" 
               class="sf m-2"
               @keyup=bindValue($event)
               :disabled="essai != 1"
               v-bind:style="{ backgroundColor: activeColor}"></input>
        `
}