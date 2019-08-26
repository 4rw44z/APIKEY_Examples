import axios from 'axios';
import Config from '../config';

const httpUtils = {
    get : async (url) => {
        const headers = {
            'user-key': Config.ZOMATO_API_KEY,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
        const { data } = await axios({
            method: 'GET',
            url,
            headers
        });

        return data;
    }        
}
export default httpUtils;
