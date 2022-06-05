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
                <div class="row"  style="justify-content:center;">
                    <stat-item
                        section-name="Parties"
                        value="1"
                        >
                    </stat-item>
                    <stat-item
                        section-name="Victoires"
                        value="100%"
                        >
                    </stat-item>
                    <stat-item
                        section-name="Serie actuelle"
                        value="1"
                        >
                    </stat-item>
                    <stat-item
                        section-name="Meilleure serie"
                        value="1"
                        >
                    </stat-item>
                </div>
            </div>
            <div class="container-fluid">
                <h2>
                    Performances
                </h2>
                <div class="row">
                    <perf-item
                        section-name="essaie 1"
                        progress="100"
                        >
                    </perf-item>
                    <perf-item
                        section-name="essaie 2"
                        progress="0"
                        >
                    </perf-item>
                    <perf-item
                        section-name="essaie 3"
                        progress="0"
                        >
                    </perf-item>
                    <perf-item
                        section-name="essaie 4"
                        progress="0"
                        >
                    </perf-item>
                    <perf-item
                        section-name="essaie 5"
                        progress="0"
                        >
                    </perf-item>
                    <perf-item
                        section-name="essaie 6"
                        progress="0"
                        >
                    </perf-item>
                    <perf-item
                        section-name="echec"
                        progress="0"
                        >
                    </perf-item>
                </div>
            </div>
            <div class="container-fluid">
                <h2>
                    Partages
                </h2>
                <div class="row">
                    <share-item class="col"
                        name="instagram"
                        fa-icon="fa-instagram"
                        bgColor="#f5057d"
                        >
                    </share-item>
                    <share-item class="col"
                        name="facebook"
                        fa-icon="fa-facebook"
                        bgColor="#1DB9D5"
                        >
                    </share-item>
                    <share-item class="col"
                        name="clip-board"
                        fa-icon="fa-clipboard"
                        bgColor="grey"
                        >
                    </share-item>
                </div>
            </div>
            <div id="toCopy">
                <!-- J'ai réussi à trouver le mot du jour en X coups sur URL -->
            </div>
        </div>
    `
}