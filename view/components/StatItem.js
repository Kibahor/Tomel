export default {
    props: {
        sectionName: String,
        value: Number,
    },
    template: `
    <div class="col-4" style="margin: 10px;">
        <div class="bg-primary" style="max-height: 75px; border-radius: 25% 10%; padding: 15px;">
            {{ sectionName }} <span class="badge bg-secondary">{{ value }}</span>
        </div>
    </div>
    `
}