export default class WordDictionnary{
    private words: string[] = ['informatique', 'javascript', 'acheter', 'test'];

    getRandomWord(date: Date): string{  
        let size = this.words.length;
        let key_date = this.getDateKey(date);
        let index = Math.pow(key_date, 9) % size; //todo revoir la puissance 

        return this.words[index];
    }

    private getDateKey(date: Date): number{
        let dateStr = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
        let key = 0;
        for (let i = 0; i < dateStr.length; i++) {
            key += parseInt(dateStr[i]);
        }

        return key;
    }
}
