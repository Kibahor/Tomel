Vue.createApp({
    created () {
        document.title = Constant.TITLE;

        let storageService = new StorageService();
        let game = storageService.loadGame(new Date());
        if (game === null) {
            game = new Game('test', storageService); //TODO récupérer le mot à deviner depuis WordDictionnary.getRandomWord
        }
    },
    data() {
        return {
            title: Constant.TITLE
        }
    }
}).mount('h1');