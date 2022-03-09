class Word{
    word;
    goodPositions = [];
    goodLetters = []; //list of the good letter in wrong position
    wrongLetters = [];

    constructor(word) {
        this.word = word;
    }

    goodLetter(letter, position){
        let findedPosition = this.word.search(letter);
        if(findedPosition === -1) //lettre non trouvée
            return false;

        if(findedPosition === position){ //lettre trouvée à la bonne place
            this.goodPositions.push({position: position, letter: word[position]});
            return true;
        }
        let cpt=0;
        for (let i=0;i<word.length;i++){
            if(word[i]===letter){
                if(this.goodPositions.position.find(i)){
                    //lettre deja trouvée
                }
                else{
                    //lettre non trouvée
                    cpt++;
                    this.goodLetters.push({letter: word[i]});
                }
            }
        };

        //TEST
        //ATET
        //TODO on check si la lettre est dans le mot
        //TODO ATTENTION si on passe plusieurs fois une lettre OU si une lettre est présente plusieurs fois

        return true;
    }

    checkLetters(word){
        for (var i=0; i<word.length; i++) {
            
            if(this.goodPosition(word, i))
                continue;

            if(this.goodLetter(word[i]))
                continue;

            this.wrongLetters.push(word[i]);
        }
    }

    compare(word){
        if(this.word === word)
            return true;

        checkLetters(word);

        return false;
    }
}