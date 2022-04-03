Vue.createApp({
    created() {
        document.title = Constant.TITLE;

        let now = new Date();
        let storageService = new StorageService();
        let game = storageService.loadGame(now);
        if (game === null) {
            let wordDictionnary = new WordDictionnary();
            game = new Game(wordDictionnary.getRandomWord(now), storageService);
        }
    },
    data() {
        return {
            title: Constant.TITLE
        }
    }
}).mount('h1');