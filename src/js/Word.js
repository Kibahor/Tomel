class Word{
    word;
    tabPositions = []; //0 if not good letter, 1 otherwise
    goodLetters = []; //list of the good letter in wrong position
    
    constructor(word) {
        this.word = word;
    }

    GoodPositions(word){
        for (var i=0;i<word.length;i++) {
            if (word[i] === this.word[i]) {
                this.tabPositions.push(1);
            }
            else{
                GoodLetters(word[i]);
                this.tabPositions.push(0);
            }
        }
    }

    GoodLetters(letter){
        if(this.word.includes(letter)){
            this.goodLetters.push(letter);
        }
    }

    Compare(word){
        GoodPositions(word);
        console.log(this.goodLetters,this.tabPositions);
    }
}