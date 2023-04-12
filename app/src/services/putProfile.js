import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const putProfile = async (token, data) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/profile`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        },
        data
    });
};

export default putProfile;
