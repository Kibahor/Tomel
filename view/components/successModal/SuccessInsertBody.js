export default {
    props: {

    },
    methods: {

    },
    template: `
        <div class="modal-body">
            <div class="container-fluid">
                <h2>
                    Statistiques
                </h2>
                <div class="row text-center">
                    TODO : Afficher le mot à trouver en vert si victoire, en rouge si défaite
                    TODO : Afficher X/Y, X étant le nombre de coup réalisés, Y étant le nombre de coup maximum
                </div>
            </div>            
            <div class="container-fluid">
                <h2>
                    Partages
                </h2>
                <div class="row">
                    <share-item class="col"
                        name="clip-board"
                        fa-icon="fa-clipboard"
                        bgColor="grey"
                        >
                    </share-item>
                </div>
            </div>
        </div>
    `
}