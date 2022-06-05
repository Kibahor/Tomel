export default {
    props: {
        name: String,
        faIcon: String,
        bgColor: String,
    },
    methods: {
        copy(){
            let copyText = document.querySelector("#toCopy");
            copyText.select();
            document.execCommand("copy");
        },
    },
    template: `
        <button @click="" class="btn" type="button" v-bind:style="{'background-color': bgColor}">
            <i class="fa " v-bind:class="faIcon"></i>
            {{ name }}
        </button>
    `
}