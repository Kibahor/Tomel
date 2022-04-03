class WordDictionnary{
    #words = ['informatique', 'javascript', 'acheter', 'test'];

    getRandomWord(date){  
        if(!date instanceof Date)
            throw new TypeError('Le paramètre date doit être de type Date');

        let size = this.#words.length;
        let key_date = this.#getDateKey(date);
        let rand_word_size = this.#words[Math.floor(Math.random() * size)].length;
        let index = Math.pow(key_date,rand_word_size) % size;

        return this.#words[index];
    }

    #getDateKey(date){     
        if(!date instanceof Date)
            throw new TypeError('Le paramètre date doit être de type Date');

        let dateStr = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
        let key = 0;
        for (let i = 0; i < dateStr.length; i++) {
            key += parseInt(dateStr[i]);
        }

        return key;
    }
}
