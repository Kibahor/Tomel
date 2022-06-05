export default {
    props: {
        sectionName: String,
        value: Number,
    },
    template: `
    <div class="col-3" style="margin: 10px;">
        <div style="background-color: #41ec7a ; max-height: 75px; border-radius: 30px 0; padding: 15px;">
            {{ sectionName }} <span class="badge bg-secondary">{{ value }}</span>
        </div>
    </div>
    `
}
//1 coté
//style="max-height: 75px; border-radius: 30px 0 0 0 ; padding: 15px;"
//2 cotés
//style="max-height: 75px; border-radius: 30px 0; padding: 15px;"
