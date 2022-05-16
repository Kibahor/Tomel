import Constant from '/src/ts/Constants';

export default {
    props: {
        word : String
    },
    data() {
        return {
            actualTry: 1,
            maxTry: Constant.MAXTRY
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
        disableLine() {
            this.getInputsFromLine().forEach(function(input) {
                input.setAttribute('disabled', '');
            });
        },
        changeLine(){
            this.disableLine();
            this.actualTry++;
            this.nextLine();
        }
    },
    template: `
    <section id="grid">
        <try v-for="n in maxTry" v-bind:word=word v-bind:essai=n @add-message="addMessage" @clear-message="clearMessage" @change-line="changeLine" @disable-line="disableLine"></try>
    </section>
        `
}