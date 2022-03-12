Vue.createApp({
    data() {
        return {
            title: Title
        }
    }
}).mount('h1');

let storageService = new StorageService();
let gameJson = storageService.loadGame(new Date()); //TODO convertir le gameJson en objet Game
if(game === null) {
    game = new Game('test', storageService); //TODO récupérer le mot à deviner depuis WordDictionnary.getRandomWord
}