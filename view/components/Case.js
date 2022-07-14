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

            const char = event.key;
            const isMobile = Constants.RegexMobile.test(navigator.userAgent); //todo revoir
            const isLastLetter = this.indice === this.totalLetter;

            if (!isMobile && event.code !== Constants.EnterCode && event.code !== Constants.BackspaceCode && (!Constants.RegexAlpha.test(char) || event.code.includes('Numpad'))) {
                this.getInputsFromLine(this.essai - 1)[this.indice - 1].value = '';
                return;
            }

            if (event.code === Constants.EnterCode || (isMobile && isLastLetter)) {
                this.$emit('validLine');
                return;
            }

            if (isLastLetter) {
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
               class="m-1 m-md-2 text-uppercase text-center"
               pattern="[a-zA-Z]"
               type="text"
               @keyup=bindValue($event)
               :disabled="essai != 1"
               v-bind:style="{ backgroundColor: activeColors[indice-1]}"></input>
        `
}