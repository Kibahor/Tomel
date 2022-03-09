Vue.createApp({
    data() {
        return {
            title: Title
        }
    }
}).mount('h1');

let storageService = new StorageService();
let game = storageService.loadGame(new Date());
if(game === null) {
    game = new Game('test', storageService); //TODO récupérer le mot à deviner depuis WordDictionnary.getRandomWord
}