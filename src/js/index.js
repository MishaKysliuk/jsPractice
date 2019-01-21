import axios from 'axios';

async function getResult() {
    const key = '0d39c248e3e1f0c0e4984db6def7d7a8';
    const query = '';
    const result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(result);
}
getResult();