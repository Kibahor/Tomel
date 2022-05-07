export default class WordDictionnary{
    private words: string[] = ['informatique', 'javascript', 'acheter', 'test'];

    getRandomWord(date: Date): string{  
        let size = this.words.length;
        let key_date = this.getDateKey(date);
        let rand_word_size = this.words[Math.floor(Math.random() * size)].length;
        let index = Math.pow(key_date,rand_word_size) % size;

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
