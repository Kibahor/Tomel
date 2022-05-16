import Constants from '/src/ts/Constants';

export default {
    props: {
        totalLetter: Number,
        indice: Number,
        essai: Number,
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
               :disabled="essai != 1"
               v-bind:style="{ backgroundColor: activeColors[indice-1]}"></input>
        `
}