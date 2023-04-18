import axios from 'axios';
import { API_URL } from '../hooks/useFetch';

const putToggleFOllow = async (token, data) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/profile/toggle-follow`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data
    });
};

export default putToggleFOllow;
