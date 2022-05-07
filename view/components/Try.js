export default {
    props: {
        word: String,
        essai: Number,
    },
    methods: {
        addMessage(message) {
            this.$emit('addMessage', message);
        },
        clearMessage() {
            this.$emit('clearMessage');
        }
    },
    template: `
        <div class="essai">
            <case v-for="number in word.length"
                  v-bind:firstLetter=firstLetter 
                  v-bind:totalLetter=word.length 
                  v-bind:indice=number 
                  v-bind:essai=essai
                  @add-message="addMessage"
                  @clear-message="clearMessage"></case>
        </div>
        `
}