import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const addContent = async (token, data, uri) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/profile/${uri}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        },
        data
    });
};

export default addContent;
