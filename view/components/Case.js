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

            let char = String.fromCharCode(event.keyCode);
            if (event.code !== Constants.EnterCode && event.code !== Constants.BackspaceCode && (!Constants.RegexAlpha.test(char) || event.code.includes('Numpad'))) {
                this.getInputsFromLine(this.essai - 1)[this.indice - 1].value = '';
                return;
            }

            if (event.code === Constants.EnterCode) {
                this.$emit('validLine');
                return;
            }

            if (this.indice === this.totalLetter) {
                this.$emit('addMessage', Constants.PressEnter);
                return;
            }

            let inputs = this.getInputsFromLine(this.essai - 1);
            let indice = this.indice;

            if (event.code === Constants.BackspaceCode) {
                if (this.indice > 1) {
                    indice = indice - 2;
                } else {
                    indice = 0;
                }
                inputs[indice].value = '';
            }

            let nextInput = inputs[indice];
            nextInput.focus();
        },
        getInputsFromLine(line) {
            let tries = document.querySelectorAll('.essai');

            return tries[line].querySelectorAll('input');
        }
    },
    template: `
        <input maxlength="1"
               class="sf m-1 m-md-2"
               pattern="[a-zA-Z]"
               type="text"
               @keyup=bindValue($event)
               :disabled="essai != 1"
               v-bind:style="{ backgroundColor: activeColors[indice-1]}"></input>
        `
}