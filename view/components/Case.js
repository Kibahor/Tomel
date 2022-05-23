import Constant from '/src/ts/Constants';

export default {
    props: {
        firstLetter: String,
        totalLetter: Number,
        indice: Number,
        essai: Number
    },
    methods: {
        bindValue(event) {
            event.preventDefault();
            this.$emit('clearMessage');

            if (event.code === Constant.EnterCode) {
                this.validLine();
                return;
            }

            if (this.indice === this.totalLetter) {
                this.$emit('addMessage', 'Appuyez sur entré !');
                return;
            }

            let inputs = this.getInputsFromLine(this.essai - 1);
            let indice = this.indice;

            if (event.code === Constant.BackspaceCode && this.indice > 1) {
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

            if (!Array.from(inputs).every(input => this.validLetter(input.value))) {
                throw 'Veuillez n\'utiliser que des lettres';
            }

            inputs.forEach(function(input) {
                input.classList.add('goodPos');
            });

            this.disableLine();
            this.openLine();
        },
        validLetter(letter) {
            let regex = /^[A-Za-z]$/y;
            return regex.test(letter)
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
        <input maxlength="1"
               class="sf m-2"
               @keyup=bindValue($event)
               :disabled="essai != 1"></input>
        `
}