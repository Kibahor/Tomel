class Word{
    #word;
    #goodPositions = [];
    #goodLetters = []; //list of the good letter in wrong position
    #wrongLetters = [];

    constructor(word) {
        this.#word = word;
    }

    compare(word){
        if(this.word === word)
            return true;

        this.#checkLetters(word);

        return false;
    }

    firstLetter(){
        return this.word[0];
    }

    #isGoodPosition(letter, position){
        let findedPosition = this.#word.search(letter);
        if(findedPosition === -1) //lettre non trouvéivae
            return false;

        if(findedPosition === position){ //lettre trouvée à la bonne place
            this.#goodPositions.push({position: position, letter: this.#word[position]});
            return true;
        }

        let cpt = 0;
        for (let i = 0; i < this.#word.length; i++){
            if(this.#word[i] === letter){
                if(this.#goodPositions.find(element => element.position == i)){
                    //lettre deja trouvée
                }
                else{
                    //lettre non trouvée
                    cpt++;
                    this.#goodLetters.push(this.#word[i]);
                }
            }
        };

        //TEST
        //ATET
        //TODO on check si la lettre est dans le mot
        //TODO ATTENTION si on passe plusieurs fois une lettre OU si une lettre est présente plusieurs fois

        return true;
    }

    #isGoodLetter(letter){
        return true; //TODO implémenter
    }

    #checkLetters(word){
        for (var i=0; i < word.length; i++) {
            
            if(this.#isGoodPosition(word, i))
                continue;

            if(this.#isGoodLetter(word[i]))
                continue;

            this.#wrongLetters.push(word[i]);
        }
    }
}