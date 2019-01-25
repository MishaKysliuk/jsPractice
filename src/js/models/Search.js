import axios from "axios";

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const key = '0d39c248e3e1f0c0e4984db6def7d7a8';
            const retrievedData = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = retrievedData.data.recipes;
        } catch (error) {
            alert(error);
        }
    }

}