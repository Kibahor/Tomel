export default {
    props: {
        sectionName: String,
        progress: Number,
    },
    template: `
        <section>
            <h3>{{ sectionName }} :</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="color:black; background-color: #41ec7a !important" v-bind:style="{width: progress+'%'}" v-bind:aria-valuenow="{progress}" aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
            </div>
        </section>
    `
}