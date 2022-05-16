import LetterState from "../dtos/LetterState";

export default class Word{
    private word: string;
    private letters: LetterState[] = [];

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
    getLetters():LetterState[]{
        return this.letters;
    }
    toJSON(): any{
        return {
            word: this.word,
            letters: this.letters,
        }
    }

    private isGoodPosition(position: number, findedPosition:number): boolean{
        return findedPosition === position //lettre trouvée à la bonne place
    }

    private isGoodLetter(letter: string, position: number, findedPosition:number): boolean{
        return (findedPosition !== -1 || this.word.indexOf(letter, 0) !== -1)
        //lettre trouvée à la mauvaise place dans la suite du mot OU lettre trouvée à la mauvaise place dans les positions précédentes
    }

    private checkLetters(word: string): void{
        for (let i=0; i < word.length; i++) {
            let findedPosition = this.word.indexOf(word[i], i);
            this.letters.push(new LetterState(
                word[i], 
                this.isGoodPosition(i, findedPosition), 
                this.isGoodLetter(word[i], i, findedPosition)
            ));
        }
    }

    static fromJSON(wordJson: any): Word{
        if(!wordJson['word'])
            throw 'Erreur dans le format JSON du WORD';

        return new Word(wordJson['word']);
    }
}