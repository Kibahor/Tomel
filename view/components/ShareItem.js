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
        <button @click="" class="btn" :class="{ bgColor }" type="button" style="background-color: #f5057d">
            <i class="fa " v-bind:class="faIcon"></i>
            {{ name }}
        </button>
    `
}