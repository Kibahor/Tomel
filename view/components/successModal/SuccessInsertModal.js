import GameService from '/src/ts/services/GameService';

export default {
    props: {
        isFinish: Boolean
    },
    data() {
        return {
            succeed: this.isSucceed(),
            tryToSuccess: 0
        }
    },
    methods: {
        isSucceed() {
            const currentGame = GameService.getCurrentGame();
            return false;
        }
    },
    template: `
        <div class="modal d-block" tabindex="-1" aria-labelledby="InsertModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="InsertModalLabel">
                            XXXXXX => TODO récupérer le libellé Victoire/Défaite en fonction du résultat
                        </h5>
                    </div>

                    <!-- Body Encart -->
                    <success-insert-body></success-insert-body>
                </div>
            </div>
        </div>
    `
}