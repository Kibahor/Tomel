class Game{
    dateGame = new Date();
    wordToFind;
    tryToSuccess = 0;
    succeed;

    constructor(wordToFind){
        this.wordToFind = wordToFind;
    }
    
    firstLetter(){
        return this.wordToFind[0];
    }

    isWordFound(proposalWord){
        if(this.tryToSuccess < MaxTry)
            return this.succeed;

        proposalWord.compare(wordToFind);
        this.tryToSuccess++;
        this.succeed = proposalWord.tabPositions.includes(1);

        return this.succeed;
    }
}