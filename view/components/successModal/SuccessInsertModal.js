import GameService from '/src/ts/services/GameService';

export default {
    props: {
        isFinish: Boolean
    },
    data() {
        return {
            succeed: this.isSucceed(),
            tryToSuccess: 0,
            currentWord: ""
        }
    },
    methods: {
        isSucceed() {
            const currentGame = GameService.getCurrentGame();
            this.currentWord = currentGame.getWordToFind().getWord();
            return currentGame.isWordFound(this.currentWord);
        }
    },
    template: `
        <div class="modal d-block" tabindex="-1" aria-labelledby="InsertModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-if="this.isSucceed()" class="modal-title text-center" id="InsertModalLabel">    
                            Victoire ({{ this.currentWord }})
                        </h5>
                        <h5 v-else class="modal-title text-center" id="InsertModalLabel">    
                            Défaite ({{ this.currentWord }})
                        </h5>
                    </div>

                    <!-- Body Encart -->
                    <success-insert-body></success-insert-body>
                </div>
            </div>
        </div>
    `
}