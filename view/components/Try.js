export default {
    props: {
        word: String,
        essai: Number
    },
    methods: {
    },
    template: `
        <div class="essai">
            <case v-for="number in word.length" v-bind:totalLetter=word.length v-bind:indice=number v-bind:essai=essai></case>
        </div>
        `
}