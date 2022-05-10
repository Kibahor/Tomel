import LetterPosition from "../dtos/LetterPosition";

export default class Word{
    private word: string;
    private goodPositions: LetterPosition[] = [];
    private goodLetters: string[] = []; //list of the good letter in wrong position
    private wrongLetters: string[] = [];

    constructor(word: string) {
        this.word = word;
    }

    compare(word: string): boolean{
        if(this.word === word)
            return true;

        this.checkLetters(word);

        return false;
    }
    
    getWord(): string{
        return this.word;
    }
    
    toJSON(): any{
        return {
            word: this.word,
            goodPositions: this.goodPositions,
            goodLetters: this.goodLetters,
            wrongLetters: this.wrongLetters,
        }
    }

    private isGoodPosition(letter: string, position: number): boolean{
        let findedPosition = this.word.indexOf(letter, position);
        if(findedPosition === position){ //lettre trouvée à la bonne place
            this.goodPositions.push({position: position, letter: this.word[position]});
            return true;
        }

        return false;
    }

    private isGoodLetter(letter: string, position: number): boolean{
        let findedPosition = this.word.indexOf(letter, position);
        if(findedPosition !== -1){ //lettre trouvée à la mauvaise place dans la suite du mot
            this.goodLetters.push(letter);
            return true;
        }
        else if(this.word.indexOf(letter, 0) !== -1) { //lettre trouvée à la mauvaise place dans les positions précédentes
            this.goodLetters.push(letter);
            return true;
        }

        return false;
    }

    private checkLetters(word: string): void{
        for (let i=0; i < word.length; i++) {
            
            if(this.isGoodPosition(word[i], i))
                continue;

            if(this.isGoodLetter(word[i], i))
                continue;

            this.wrongLetters.push(word[i]);
        }
    }

    static fromJSON(wordJson: any): Word{
        if(!wordJson['word'])
            throw 'Erreur dans le format JSON du WORD';

        return new Word(wordJson['word']);
    }
}