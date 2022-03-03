class Game{
    TryToSuccess;
    DateGame = new Date();
    WordToFind = new Word("toto");
    Succed;
    
    FirstLetter(){
        return this.WordToFind[0];
    }

    isWordFound(word){
        WordToFind.Compare(word);
        if(!WordToFind.tabPositions.includes(0)){
            return true;
        }
        return false;
    }
}