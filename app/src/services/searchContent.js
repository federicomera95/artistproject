import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const searchContent = async (token, data) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/search`,
        headers: { Authorization: `Bearer ${token}` },
        data
    });
};

export default searchContent;
