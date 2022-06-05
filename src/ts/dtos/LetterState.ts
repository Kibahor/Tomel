export default class LetterPosition{
    letter: string;
    good_position: boolean;
    good_letter: boolean;
    wrong_letter: boolean = false;

    constructor(letter: string, good_position: boolean, good_letter: boolean) {
        this.letter = letter;
        this.good_letter = good_letter;
        this.good_position = good_position;
        if(!good_letter && !good_position)
            this.wrong_letter = true;
    }
}