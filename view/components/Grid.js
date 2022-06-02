import Constants from '/src/ts/Constants';

export default {
    props: {
        word: String
    },
    data() {
        return {
            actualTry: 1,
            maxTry: Constants.MAXTRY
        }
    },
    methods: {
        addMessage(message) {
            this.$emit('addMessage', message);
        },
        clearMessage() {
            this.$emit('clearMessage');
        },
        getInputsFromLine() {
            return document.querySelectorAll('#try-' + this.actualTry + ' > input');
        },
        nextLine() {
            let inputs = this.getInputsFromLine();
            inputs.forEach(function(input) {
                input.removeAttribute('disabled');
            });

            inputs[0].focus();
        },
        wordFound() {
            this.getInputsFromLine().forEach(function(input) {
                input.setAttribute('style', `background-color: ${Constants.Vert}`);
            });
            this.disableLine();
            this.addMessage('Word has been found !');
        },
        disableLine() {
            this.getInputsFromLine().forEach(function(input) {
                input.setAttribute('disabled', '');
            });
        },
        changeLine() {
            this.disableLine();
            this.actualTry++;
            this.nextLine();
        }
    },
    template: `
    <section id="grid">
        <try v-for="n in maxTry" 
             v-bind:word=word
             v-bind:essai=n 
             @add-message="addMessage" 
             @clear-message="clearMessage" 
             @change-line="changeLine" 
             @word-found="wordFound"
             @disable-line="disableLine"></try>
    </section>
        `
}