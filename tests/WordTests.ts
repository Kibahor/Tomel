//TODO 1 méthode par test
//TODO on test la méthode compare de la classe Word
//TODO cas à tester : mot exact, mot différent avec lettre bien placée, mot différent avec lettre trouvée mais mal placée
//Mot à 13 lettre : https://www.listesdemots.net/mots13lettrespage27.htm
import { Word } from "src/ts/models/Word";

function testRightWord():void {
    const WORD:string = "dithyrambique";
    let wordClass:Word = new Word(WORD);
    if(!wordClass.compare(WORD))
        throw new Error("compare(word) must return true with the same word and it return false");
    console.log("testRightWord : success !");
}

function testWrongWord():void {
    const WORD:string = "hiboux";
    let wordClass:Word = new Word(WORD);
    if(wordClass.compare("genoux"))
        throw new Error("compare(word) must return false with the wrong word and it return true");
    console.log("testWrongWord : success !");
}

function testGoodPositions():void {
    const WORD:string = "tigre";
    let wordClass:Word = new Word(WORD);
    let testWord:string = "tzgrz"; //Here I test with a fake word if some letter at beginning (tg) and ending (r) of the word match correctly
    let letterAtGoodPositions:any = [
        {position: 0, letter: "t"},
        {position: 2, letter: "g"},
        {position: 3, letter: "r"}
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
    const WORD:string = "television";
    let wordClass:Word = new Word(WORD);
    let testWord:string = "noisivelet";
    wordClass.compare(testWord);
    let goodLetters:string[] = ["n","o","i","s","i","v","e","l","e","t"];
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

