//TODO 1 méthode par test
//TODO on test la méthode compare de la classe Word
//TODO cas à tester : mot exact, mot différent avec lettre bien placée, mot différent avec lettre trouvée mais mal placée
//Mot à 13 lettre : https://www.listesdemots.net/mots13lettrespage27.htm
import { Word } from "../src/ts/models/Word";

const WORD:string = "dithyrambique";

function testRightWord():void {
    let wordClass:Word = new Word(WORD);
    if(!wordClass.compare(WORD))
        throw new Error("compare(word) must return true with the same word and it return false");
    console.log("testRightWord : success !");
}

function testWrongWord():void {
    let wordClass:Word = new Word(WORD);
    if(wordClass.compare("depeignassent"))
        throw new Error("compare(word) must return false with the wrong word and it return true");
    console.log("testWrongWord : success !");
}

function testGoodPositions():void {
    let wordClass:Word = new Word(WORD);
    let testWord:string = "dzzhyzzzzzzze"; //Here I test with a fake word if some letter at beginning (dhy) and ending (e) of the word match correctly
    let letterAtGoodPositions:any = [
        {position: 0, letter: "d"},
        {position: 3, letter: "h"},
        {position: 4, letter: "y"},
        {position: 12, letter: "e"}
    ];
    wordClass.compare(testWord); //The return value isn't important
    let result:any = wordClass.toJSON()["goodPositions"]; //Because of privacy of variables, I've to use toJSON to see the content of arrays
    if(JSON.stringify(letterAtGoodPositions) !== JSON.stringify(result)){ //For compare two array i need to stringify each array
        console.log("Expected : ",letterAtGoodPositions);
        console.log("got : ",result);
        throw new Error("Problem with isGoodPositions(), the expected result mismatch with actual result");
    }
    console.log("testGoodPositions : success !");
}

function testGoodLetters(){
    let wordClass:Word = new Word(WORD);
    let testWord:string = "euqibmaryhtid";
    wordClass.compare(testWord);
    let goodLetters:string[] = ["e","u","q","i","b","m","r","y","h","t","i","d"];
    let result:any = wordClass.toJSON()["goodLetters"];
    if(JSON.stringify(goodLetters) !== JSON.stringify(result)){
        console.log("Expected : ",goodLetters);
        console.log("got : ",result);
        throw new Error("Problem with isGoodLetter(), the expected result mismatch with actual result");
    }
    console.log("testGoodLetters : success !");
}

testRightWord();
testWrongWord();
testGoodPositions();
testGoodLetters()

