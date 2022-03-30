//TODO 1 méthode par test
//TODO on test la méthode compare de la classe Word
//TODO cas à tester : mot exact, mot différent avec lettre bien placée, mot différent avec lettre trouvée mais mal placée
//Mot à 13 lettre : https://www.listesdemots.net/mots13lettrespage27.htm
import { Word } from "../src/ts/models/Word";

let word:string = "dithyrambique";

function testRightWord():void {
    let wordClass:Word = new Word(word);
    if(!wordClass.compare(word))
        throw new Error("compare(word) must return true with the same word and it return false");
}

function testWrongWord():void {
    let wordClass:Word = new Word(word);
    if(wordClass.compare("depeignassent"))
        throw new Error("compare(word) must return false with the wrong word and it return true");
}

function testWordWithSomeMatchLetters():void {
    let wordClass:Word = new Word(word);
    let testWord:string = "dzzhyzzzzzzze"; //Here I test with a fake word if some letter at beginning (dhy) and ending (e) of the word match correctly
    let letterAtGoodPlace = [
        {position: 0, letter: "d"},
        {position: 3, letter: "h"},
        {position: 4, letter: "y"},
        {position: 12, letter: "e"}
    ];
    wordClass.compare(testWord); //The return value isn't important
    let result = wordClass.toJSON().get("goodPositions"); //Because of privacy of variables, I've to use toJSON to see the content of arrays
    if(letterAtGoodPlace !== result){
        console.log("Expected : ",letterAtGoodPlace);
        console.log("got : ",result);
        throw new Error("Problem with isGoodLetter(), the expected result mismatch with actual result");
    }
}

