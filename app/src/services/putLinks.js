import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const putLinks = async (token, data) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/profile/links`,
        headers: { Authorization: `Bearer ${token}` },
        data
    });
};

export default putLinks;
