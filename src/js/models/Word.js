class Word{
    #word;
    #goodPositions = [];
    #goodLetters = []; //list of the good letter in wrong position
    #wrongLetters = [];

    constructor(word) {
        this.#word = word;
    }

    compare(word){
        if(this.#word === word)
            return true;

        this.#checkLetters(word);

        return false;
    }

    firstLetter(){
        return this.#word[0];
    }
    
    toJSON(){
        return {
            word: this.#word,
            goodPositions: this.#goodPositions,
            goodLetters: this.#goodLetters,
            wrongLetters: this.#wrongLetters,
        }
    }

    #isGoodPosition(letter, position){
        let findedPosition = this.#word.indexOf(letter, position);
        if(findedPosition === position){ //lettre trouvée à la bonne place
            this.#goodPositions.push({position: position, letter: this.#word[position]});
            return true;
        }

        return false;
    }

    #isGoodLetter(letter, position){
        let findedPosition = this.#word.indexOf(letter, position);
        if(findedPosition !== -1){ //lettre trouvée à la mauvaise place dans la suite du mot
            this.#goodLetters.push(letter);
        }
        else if(this.#word.indexOf(letter, 0) !== -1) { //lettre trouvée à la mauvaise place dans les positions précédentes
            this.#goodLetters.push(letter);
        }

        return false;
    }

    #checkLetters(word){
        for (var i=0; i < word.length; i++) {
            
            if(this.#isGoodPosition(word[i], i))
                continue;

            if(this.#isGoodLetter(word[i], i))
                continue;

            this.#wrongLetters.push(word[i]);
        }
    }

    static fromJSON(wordJson){
        return new Word(wordJson['word']);
    }
}