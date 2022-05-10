import Constants from '/src/ts/Constants';

export default {
    props: {
        totalLetter: Number,
        indice: Number,
        essai: Number
    },
    methods: {
        bindValue(event) {
            event.preventDefault();
            this.$emit('clearMessage');

            if (event.code === Constants.EnterCode) {
                this.validLine();
                return;
            }

            if (this.indice === this.totalLetter) {
                this.$emit('addMessage', Constants.PressEnter);
                return;
            }

            let inputs = this.getInputsFromLine(this.essai - 1);
            let indice = this.indice;

            if (event.code === Constants.BackspaceCode && this.indice > 1) {
                indice = indice - 2;
                inputs[indice].value = '';
            }

            let nextInput = inputs[indice];
            nextInput.focus();
        },
        validLine() {
            let inputs = this.getInputsFromLine(this.essai - 1);
            if (!Array.from(inputs).every(input => input.value !== '')) {
                throw 'Veuillez renseigner tout les champs';
            }

            inputs.forEach(function(input) {
                input.classList.add('goodPos');
            });

            this.$emit('validLine');
        },
        getInputsFromLine(line) {
            let tries = document.querySelectorAll('.essai');

            return tries[line].querySelectorAll('input');
        }
    },
    template: `
        <input maxlength="1" 
               class="sf m-2"
               @keyup=bindValue($event)
               :disabled="essai != 1"></input>
        `
}